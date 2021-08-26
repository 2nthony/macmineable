package main

import (
	"fmt"
	"os"
	"strings"

	. "github.com/klauspost/cpuid/v2"
)

func IsIntel() bool {
	fmt.Printf("CPU.BrandName: %v\n", CPU.BrandName)
	return strings.Contains(CPU.BrandName, "Intel")
}

func Ternay(cond bool, res1 interface{}, res2 interface{}) interface{} {
	if cond {
		return res1
	} else {
		return res2
	}
}

// https://tehub.com/a/44BceBfRK0
func isRunBuild() bool {
	tempDir := os.TempDir()
	execDir, err := os.Executable()
	if err != nil {
		fmt.Println(err)
	}

	return !strings.Contains(execDir, tempDir)
}
