package main

import (
	"regexp"

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
