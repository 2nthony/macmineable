package main

import (
	"fmt"
	"macMineable/lib"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/2nthony/webview"
)

const (
	hostIP   = "127.0.0.1"
	hostPort = "47261" // Fixed http port because client-side uses `localstorage`
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

	lib.RegisterIPCEvents(w)

	w.SetTitle("macMineable")
	w.SetSize(400, 650, webview.HintFixed)

	createServer()

	w.Navigate(fmt.Sprintf("http://%s:%s?%d", hostIP, hostPort, time.Now().UnixMilli()))

	w.Run()
}

func createServer() {
	lib.RegisterRoutes()

	go func() {
		fmt.Println(http.ListenAndServe(fmt.Sprintf("%s:%s", hostIP, hostPort), nil))
	}()
}
