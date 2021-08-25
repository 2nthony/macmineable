package main

import (
	"fmt"
	"os"
	"regexp"
	"strings"

	. "github.com/klauspost/cpuid/v2"
)

func IsIntel() bool {
	validID := regexp.MustCompile(`(?i)^intel`)
	return validID.MatchString(CPU.BrandName)
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
