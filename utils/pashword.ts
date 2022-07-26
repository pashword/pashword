import base85 from "base85";
import jsSHA from "jssha";
import seedrandom from "seedrandom";
import scrypt from "scrypt-js";
import bigInt from "big-integer";
import csprng from "csprng";
import * as bigintConversion from "bigint-conversion";

const N = 1 << 15;
const r = 8;
const p = 1;

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

const encodeUtf8 = (str: string): Uint8Array => {
  return new TextEncoder().encode(str);
};

export const generatePashword = (
  toHash: string,
  pashwordLength: number,
  website: string,
  username: string
): string => {
  // SHAKE256 INITIALIZE
  const shaObj = new jsSHA("SHAKE256", "UINT8ARRAY");
  // SHA-3-512 INITIALIZE
  const sha3Obj = new jsSHA("SHA3-512", "TEXT", { encoding: "UTF8" });
  sha3Obj.update(toHash);
  // Convert toHash json object to its own SHA3-512 HEX
  toHash = sha3Obj.getHash("HEX");

  // GENERATE SCRYPT
  const scryptHash = scrypt.syncScrypt(
    encodeUtf8(toHash),
    encodeUtf8(website + username),
    N,
    r,
    p,
    32
  );

  const generateIndex = (modulo: number) => {
    shaObj.update(scryptHash);
    let prng = shaObj.getHash("UINT8ARRAY", { outputLen: 256 });
    let result = bigintConversion.bufToBigint(prng);

    return BigInt(result) % BigInt(modulo);
  };

  const pickCharacter = (characterSet: string) => {
    return characterSet[Number(generateIndex(characterSet.length))];
  };

  let index1 = Number(generateIndex(pashwordLength));

  let index2 = Number(generateIndex(pashwordLength));
  while (index2 === index1) {
    index2 = Number(generateIndex(pashwordLength));
  }

  let index3 = Number(generateIndex(pashwordLength));
  while (index3 === index2 || index3 === index1) {
    index3 = Number(generateIndex(pashwordLength));
  }

  let index4 = Number(generateIndex(pashwordLength));
  while (index4 === index3 || index4 === index2 || index4 === index1) {
    index4 = Number(generateIndex(pashwordLength));
  }

  let pashword = "";
  for (let i = 0; i < pashwordLength; i++) {
    if (i === index1) {
      pashword += pickCharacter(lowercaseLetters);
    } else if (i === index2) {
      pashword += pickCharacter(uppercaseLetters);
    } else if (i === index3) {
      pashword += pickCharacter(validSymbols);
    } else if (i === index4) {
      pashword += pickCharacter(numbers);
    } else {
      pashword += pickCharacter(allowedCharacters);
    }
  }

  return pashword;
};

export { replaceAt };
