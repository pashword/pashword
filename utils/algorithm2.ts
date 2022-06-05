import base85 from "base85";
import jsSHA from "jssha";

const allowedCharacters =
  "DZ@8cKYle*tGmsVv%Tg3nU4fyS5N.uwLRC&kFbrB2o#I1QzjP$diMhWqA906JpaXxEHO7";
const validSymbols = "@#$%&*.";

function replaceAt(str: string, index: number, chr: string) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
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
    if (!allowedCharacters.includes(encodedHash[i])) {
      // replace invalid character with character from 'symbols' string at index i
      encodedHash = replaceAt(
        encodedHash,
        i,
        validSymbols[i % validSymbols.length]
      );
    }

    // append the character from encoded string to pashword
    pashword += encodedHash[i];
  }

  return pashword;
};
