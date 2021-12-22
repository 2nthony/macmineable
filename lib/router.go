package lib

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gorilla/websocket"
)

func RegisterRoutes() {
	http.Handle("/", http.FileServer(http.Dir("dist")))
	http.HandleFunc("/mining-log", serveWsMiningLog)
}

func serveWsMiningLog(w http.ResponseWriter, r *http.Request) {
	upgrader := websocket.Upgrader{}

	ws, socketErr := upgrader.Upgrade(w, r, nil)
	if socketErr != nil {
		fmt.Printf("socketErr: %v\n", socketErr)
	}
	// Don't close ws
	// defer ws.Close()

	Event.Subscribe("cmd:log", func(line string) {
		writeMessageErr := ws.WriteMessage(websocket.TextMessage, []byte(line))
		if writeMessageErr != nil {
			fmt.Printf("writeMessageErr: %v\n", writeMessageErr)
		}
	})

	wsPing(ws)
}

func wsPing(ws *websocket.Conn) {
	pingCount := 0
	var ticker *time.Ticker = time.NewTicker(10 * time.Second)

	go func() {
		for t := range ticker.C {
			fmt.Println("tick:", t)
			pingCount += 1

			if pingCount >= 30 {
				ws.Close()
				ticker.Stop()
			}
		}
	}()

	for {
		_, message, err := ws.ReadMessage()
		if err != nil {
			fmt.Printf("readMessageErr: %v\n", err)
			break
		}
		m := string(message)

		// reset ping count
		if m == "ping" {
			pingCount = 0
		}
	}
}
