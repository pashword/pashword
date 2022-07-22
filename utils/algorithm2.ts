import seedrandom from "seedrandom";
import base85 from "base85";
import jsSHA from "jssha";

const allowedCharacters =
  "@#$%&*._!0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const validSymbols = "@#$%&*._!";

function replaceAt(str: string, index: number, chr: string) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function prng(input: string, limit: number, round: number): number {
  let seed = input;
  for (let i = 0; i < round; i++) {
    seed += seed;
  }
  return Math.floor(Math.abs(seedrandom.alea(seed)() * 100000)) % limit;
}

export const generatePashword = (
  toHash: string,
  pashwordLength: number
): string => {
  // Setting up SHA generation config
  const shaObj = new jsSHA("SHA3-512", "TEXT", { encoding: "UTF16BE" });
  shaObj.update(toHash);
  // Generate SHA3-512 sum in HEX for string 'toHash'
  let hashHex = shaObj.getHash("HEX");
  // encode the hex in base85
  let encodedHash = base85.encode(hashHex);

  let pashword = "";
  for (let i = 0; i < pashwordLength; i++) {
    // If encoded string contains an invalid character
    if (!allowedCharacters.includes(encodedHash[encodedHash.length - i - 1])) {
      // replace invalid character with character from 'symbols' string at index i from the back
      encodedHash = replaceAt(
        encodedHash,
        encodedHash.length - i - 1,
        validSymbols[i % validSymbols.length]
      );
    }
    // append the character from encoded string to pashword
    pashword += encodedHash[encodedHash.length - i - 1];
  }

  // In case the generated pashword doesn't contain
  // all required characters, add them all:
  let index1 = prng(hashHex, uppercaseLetters.length, 1);
  pashword = replaceAt(pashword, index1, uppercaseLetters[index1]);

  let index2 = prng(hashHex, lowercaseLetters.length, 2);
  pashword = replaceAt(pashword, index2, lowercaseLetters[index2]);

  let index3 = prng(hashHex, numbers.length, 3);
  pashword = replaceAt(pashword, index3, numbers[index3]);

  let index4 = prng(hashHex, validSymbols.length, 4);
  pashword = replaceAt(pashword, index4, validSymbols[index4]);

  return pashword;
};
