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

	"github.com/evillt/webview"
	"github.com/pkg/browser"
)

func main() {
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

	registerIpcEmitters(w)

	w.SetTitle("macMineable")
	w.SetSize(400, 600, webview.HintFixed)

	http.Handle("/", http.FileServer(http.Dir("dist")))
	httpListener, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		fmt.Println(err)
	}
	go func() {
		fmt.Println(http.Serve(httpListener, nil))
	}()

	w.Navigate(fmt.Sprintf("http://%s/", httpListener.Addr()))
	w.Run()
}

// client events
func registerIpcEmitters(w webview.WebView) {
	var miningProcess *exec.Cmd

	w.Bind("emitPageReady", func() {
		fmt.Println("emitPageReady")
		w.Eval(fmt.Sprintf(`
      onPageReady({
        cpuCores: %s
      })
      `,
			fmt.Sprint(runtime.NumCPU()),
		))
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

		fmt.Println(form)

		if miningProcess != nil {
			w.Eval("onMiningStarted()")
			return
		}

		minerPath := Ternay(IsIntel(), "assets/miner/xmrig", "assets/miner/xmrig-m1")
		process, err := RunCommand(
			fmt.Sprintf(`%s --no-color --url=rx.unmineable.com:3333 --algo=rx --pass=x --keepalive --user=%s:%s.macMineable#%s --cpu-max-threads-hint=%s`, minerPath, form.Symbol, form.Address, form.ReferralCode, fmt.Sprint(form.CPUUsage)),
			func(line string) {
				w.Eval(fmt.Sprintf(`onMiningLog("%s")`, line))
			},
		)
		if err != nil {
			w.Eval(fmt.Sprintf(`onMiningStartedError("%s")`, err))
			return
		}

		w.Eval("onMiningStarted()")

		miningProcess = process
	})
	w.Bind("emitStopMining", func() {
		if miningProcess != nil {
			// prefer kill the process
			miningProcess.Process.Kill()
			w.Eval("onMiningStopped()")
			miningProcess = nil
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
