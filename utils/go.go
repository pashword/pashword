// You can edit this code!
// Click here and start typing.
package main

import (
	"golang.org/x/crypto/scrypt"
	"golang.org/x/crypto/sha3"

	"encoding/binary"
	"strings"
)

func encodeUtf8(s string) []byte {
	return []byte(s)
}

const (
	pashwordLen = 20

	// cost parameters for Scrypt.
	// recommended by scrypt.Key documentation
	scrypt_N = 1 << 15
	scrypt_r = 8
	scrypt_p = 1
)

var (
	allowedCharacters = []rune{'"', '@', '#', '$', '%', '&', '*', '.', '_', '!', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'}
	uppercaseLetters  = []rune{'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'}
	lowercaseLetters  = []rune{'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'}
	numbers           = []rune{'1', '2', '3', '4', '5', '6', '7', '8', '9', '0'}
	validSymbols      = []rune{'@', '#', '$', '%', '&', '*', '.', '_', '!'}
)

func derivePassword(masterPassword string, website string, username string) string {
	// FEED SCRYPT THE MASTER PASSWORD
	pwHash, err := scrypt.Key(encodeUtf8(masterPassword), encodeUtf8(website+username), scrypt_N, scrypt_r, scrypt_p, 32)
	if err != nil {
		panic(err)
	}

	// Seed CSPRNG
	prng := sha3.NewShake256()
	prng.Write(pwHash)

	// get an integer number in [0,n) from PRNG
	choose := func(sup int) int {
		var n uint64
		// cryptography trick: pull 64 bits so the modulo bias is negligible
		binary.Read(prng, binary.LittleEndian, &n)
		return int(n % uint64(sup))
	}

	// pick a random character using PRNG
	sample := func(charset []rune) rune {
		return charset[choose(len(charset))]
	}

	// FIXME: we could draw the same index multiple times
	index1 := choose(pashwordLen)
	index2 := choose(pashwordLen)
	index3 := choose(pashwordLen)
	index4 := choose(pashwordLen)

	pashwordBuilder := strings.Builder{}
	for i := 0; i < pashwordLen; i++ {
		var c rune
		if i == index1 {
			c = sample(uppercaseLetters)
		} else if i == index2 {
			c = sample(lowercaseLetters)
		} else if i == index3 {
			c = sample(numbers)
		} else if i == index4 {
			c = sample(validSymbols)
		} else {
			c = sample(allowedCharacters)
		}
		pashwordBuilder.WriteRune(c)
	}
	return pashwordBuilder.String()
}

func main() {
	println(derivePassword("5UP3R $eekret", "example.com", "john"))
}
