package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/websocket"
)

func registerRoutes() {
	http.Handle("/", http.FileServer(http.Dir("dist")))
	http.HandleFunc("/wsMiningLog", wsMiningLog)
}

var upgrader = websocket.Upgrader{}

func wsMiningLog(w http.ResponseWriter, r *http.Request) {
	ws, socketErr := upgrader.Upgrade(w, r, nil)
	if socketErr != nil {
		fmt.Printf("socketErr: %v\n", socketErr)
	}
	// Don't close ws
	// defer ws.Close()

	eventbus.Subscribe("cmd:log", func(line string) {
		writeMessageErr := ws.WriteMessage(websocket.TextMessage, []byte(line))
		if writeMessageErr != nil {
			fmt.Printf("writeMessageErr: %v\n", writeMessageErr)
		}
	})
}
