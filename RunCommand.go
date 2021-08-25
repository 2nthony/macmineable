// Modified from https://github.com/kirinlabs/execshell/blob/master/main.go

package main

import (
	"fmt"
	"io"
	"log"
	"os/exec"
	"strings"
)

func asyncLog(reader io.ReadCloser, cb func(line string)) error {
	bucket := make([]byte, 1024)
	buffer := make([]byte, 1024)
	for {
		num, err := reader.Read(buffer)
		if err != nil {
			if err == io.EOF || strings.Contains(err.Error(), "closed") {
				err = nil
			}
			return err
		}
		if num > 0 {
			line := ""
			bucket = append(bucket, buffer[:num]...)
			tmp := string(bucket)
			if strings.Contains(tmp, "\n") {
				ts := strings.Split(tmp, "\n")
				if len(ts) > 1 {
					line = strings.Join(ts[:len(ts)-1], "\n")
					bucket = []byte(ts[len(ts)-1]) // 不够整行的以后再处理
				} else {
					line = ts[0]
					bucket = bucket[:0]
				}
				fmt.Printf("%s\n", line)
				cb(line)
			}

		}
	}
}

func RunCommand(c string, cb func(line string)) (*exec.Cmd, error) {
	cmd := exec.Command("bash", "-c", c)

	stdout, _ := cmd.StdoutPipe()
	// stderr, _ := cmd.StderrPipe()

	if err := cmd.Start(); err != nil {
		log.Printf("Error starting command: %s......", err.Error())
		return cmd, err
	}

	go asyncLog(stdout, cb)
	// go asyncLog(stderr)

	/* if err := cmd.Wait(); err != nil {
		log.Printf("Error waiting for command execution: %s......", err.Error())
		return cmd, err
	} */

	return cmd, nil
}
