package lib

import (
	"encoding/json"
	"fmt"
	"os/exec"
	"runtime"

	"github.com/2nthony/webview"
	"github.com/pkg/browser"
)

// client events
func RegisterIPCEvents(w webview.WebView) {
	var miningProcess *exec.Cmd
	minerPath := Ternay(IsIntel(), "assets/miner/xmrig", "assets/miner/xmrig-m1")

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

		fmt.Printf("form: %v\n", form)

		if miningProcess != nil {
			w.Eval("onMiningStarted()")
			return
		}

		process, err := RunCommand(
			fmt.Sprintf(`%s --no-color --url=rx.unmineable.com:3333 --algo=rx --pass=x --keepalive --user=%s:%s.macMineable#%s --cpu-max-threads-hint=%s`, minerPath, form.Symbol, form.Address, form.ReferralCode, fmt.Sprint(form.CPUUsage)),
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
			miningProcess = nil
			w.Eval("onMiningStopped()")
		}
	})

	w.Bind("emitOpenURL", func(url string) {
		browser.OpenURL(url)
	})
}
