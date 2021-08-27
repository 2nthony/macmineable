package main

import (
	"encoding/json"
	"fmt"
	"net"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"

	"github.com/asaskevich/EventBus"
	"github.com/evillt/webview"
	"github.com/pkg/browser"
)

var eventbus = EventBus.New()

const (
	httpHost = "127.0.0.1"
	httpPort = "47261"
)

func main() {
	runApp()
}

func runApp() {
	// start: make the root dir is the `Resources`, global effected!
	ep, err := os.Executable()
	if err != nil {
		fmt.Println("os.Executable:", err)
	}
	err = os.Chdir(filepath.Join(filepath.Dir(ep), "..", "Resources"))
	if err != nil {
		fmt.Println("os.Chdir:", err)
	}
	// end

	w := webview.New(true)
	defer w.Destroy()

	registerIPCEvents(w)

	w.SetTitle("macMineable")
	w.SetSize(400, 600, webview.HintFixed)

	httpListener := serveUI()

	w.Navigate(fmt.Sprintf("http://%s/", httpListener.Addr()))

	w.Run()
}

func serveUI() net.Listener {
	http.Handle("/", http.FileServer(http.Dir("dist")))
	// Fixed http port because client-side uses `localstorage`
	httpListener, err := net.Listen("tcp", fmt.Sprintf("%s:%s", httpHost, httpPort))
	if err != nil {
		fmt.Println(err)
	}
	go func() {
		fmt.Println(http.Serve(httpListener, nil))
	}()

	return httpListener
}

// client events
func registerIPCEvents(w webview.WebView) {
	var miningProcess *exec.Cmd
	minerPath := Ternay(IsIntel(), "assets/miner/xmrig", "assets/miner/xmrig-m1")

	w.Bind("emitPageReady", func() {
		fmt.Println("emitPageReady")
		w.Dispatch(func() {
			w.Eval(fmt.Sprintf(`
        onPageReady({
          cpuCores: %s
        })
        `,
				fmt.Sprint(runtime.NumCPU()),
			))
		})
	})

	type Form struct {
		Symbol       string `json:"symbol"`
		Address      string `json:"address"`
		ReferralCode string `json:"referralCode"`
		CPUUsage     int    `json:"cpuUsage"`
	}
	w.Bind("emitStartMining", func(data string) {
		var form Form
		json.Unmarshal([]byte(data), &form)

		fmt.Printf("form: %v\n", form)

		if miningProcess != nil {
			w.Dispatch(func() {
				w.Eval("onMiningStarted()")
			})
			return
		}

		process, err := RunCommand(
			fmt.Sprintf(`%s --no-color --url=rx.unmineable.com:3333 --algo=rx --pass=x --keepalive --user=%s:%s.macMineable#%s --cpu-max-threads-hint=%s`, minerPath, form.Symbol, form.Address, form.ReferralCode, fmt.Sprint(form.CPUUsage)),
		)
		if err != nil {
			w.Dispatch(func() {
				w.Eval(fmt.Sprintf(`onMiningStartedError("%s")`, err))
			})
			return
		}

		w.Dispatch(func() {
			w.Eval("onMiningStarted()")
		})

		eventbus.Subscribe("cmd:log", func(line string) {
			// https://github.com/webview/webview/issues/248
			// prevent routine in low-perform machine, e.g. Macbook 12-inch with Intel M-5Y31 chip
			w.Dispatch(func() {
				w.Eval(fmt.Sprintf(`onMiningLog("%s")`, line))
			})
		})

		miningProcess = process
	})
	w.Bind("emitStopMining", func() {
		if miningProcess != nil {
			// prefer kill the process
			miningProcess.Process.Kill()
			miningProcess = nil
			w.Dispatch(func() {
				w.Eval("onMiningStopped()")
			})
			/* err := miningProcess.Process.Signal(os.Interrupt)
						if err != nil {
							w.Eval(fmt.Sprintf("onMiningStoppedError(%s)", err))
						} else {
			      } */
		}
	})
	w.Bind("emitOpenURL", func(url string) {
		browser.OpenURL(url)
	})
}
