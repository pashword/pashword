import base85 from "base85";
import jsSHA from "jssha";

const allowedCharacters =
  "DZ@8cKYle*tGmsVv%Tg3nU4fyS5N.uwLRC&kFbrB2o#I1QzjP$diMhWqA906JpaXxEHO7";
const validSymbols = "@#$%&*.";
const MAX_TRIES = 20;

function replaceAt(str: string, index: number, chr: string) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

export const generatePashword = (
  toHash: string,
  pashwordLength: number,
  tries: number
): string => {
  // Setting up SHA generation config
  const shaObj = new jsSHA("SHA3-512", "TEXT", { encoding: "UTF16BE" });
  shaObj.update(toHash);
  // Generate SHA3-512 sum in HEX for string 'toHash'
  let hashHex = shaObj.getHash("B64");
  console.log("🚀 => hashHex", hashHex);
  // encode the hex in base85
  let encodedHash = base85.encode(hashHex);

  console.log("🚀 => encodedHash", encodedHash);

  let pashword = "";
  for (let i = 0; i < pashwordLength; i++) {
    // If encoded string contains an invalid character
    if (!allowedCharacters.includes(encodedHash[encodedHash.length - i - 1])) {
      // replace invalid character with character from 'symbols' string at index i
      encodedHash = replaceAt(
        encodedHash,
        encodedHash.length - i - 1,
        validSymbols[i % validSymbols.length]
      );
    }
    // append the character from encoded string to pashword
    pashword += encodedHash[encodedHash.length - i - 1];
  }

  let includesSymbols = 0;
  let includesNumbers = 0;
  let includesSmallLetters = 0;
  let includesCapitalLetters = 0;
  for (let character of pashword) {
    if (character >= "a" && character <= "z") {
      includesSmallLetters++;
    } else if (character >= "A" && character <= "Z") {
      includesCapitalLetters++;
    } else if (parseInt(character) >= 0 && parseInt(character) <= 9) {
      includesNumbers++;
    } else {
      includesSymbols++;
    }
  }

  if (includesSymbols === 0) {
    if (tries < MAX_TRIES) {
      return generatePashword(encodedHash + "It is", pashwordLength, tries + 1);
    } else {
      // Append a random symbol at the end, based on the ASCII value of the last character
      pashword +=
        validSymbols[
          pashword.charCodeAt(pashword.length - 1) % validSymbols.length
        ];
    }
  }

  if (includesNumbers === 0) {
    if (tries < MAX_TRIES) {
      return generatePashword(
        encodedHash + "better to try",
        pashwordLength,
        tries + 1
      );
    } else {
      pashword += pashword.charCodeAt(pashword.length - 1) % 10;
    }
  }

  if (includesSmallLetters === 0) {
    if (tries < MAX_TRIES) {
      return generatePashword(
        encodedHash + "than to wait here",
        pashwordLength,
        tries + 1
      );
    } else {
      for (let character of encodedHash) {
        if (character >= "a" && character <= "z") {
          pashword += "a";
          break;
        }
      }
    }
  }

  if (includesCapitalLetters === 0) {
    if (tries < MAX_TRIES) {
      return generatePashword(
        encodedHash + "for death.",
        pashwordLength,
        tries + 1
      );
    } else {
      for (let character of encodedHash) {
        if (character >= "A" && character <= "Z") {
          pashword += "A";
          break;
        }
      }
    }
  }

  return pashword;
};

// reddit
// hehe
//dddddddddd11asdasdd1111111111111111111
// small
