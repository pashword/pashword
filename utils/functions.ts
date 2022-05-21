import jsSHA from "jssha";

const asciiLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const punctutation = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const passwordCharacters = asciiLetters;
const length = 20;

export const generatePashword = (toHash: string): string => {
  const shaObj = new jsSHA("SHA3-512", "TEXT", { encoding: "UTF8" });
  shaObj.update(toHash);

  const hashInBytes = shaObj.getHash("UINT8ARRAY");
  let integerFromBytes = BigInt(
    Buffer.from(hashInBytes).readUIntBE(0, hashInBytes.length)
  );

  let pashword = "";

  for (let i = 0; i < length; i++) {
    let result = passwordCharacters;
    while (result.length > 1) {
      if (integerFromBytes & BigInt(1)) {
        const resultLength = Math.ceil(result.length / 2);
        result = result.slice(0, resultLength);
      } else {
        const resultLength = Math.ceil(result.length / 2);
        result = result.slice(resultLength, result.length);
      }
      integerFromBytes = BigInt(integerFromBytes >> BigInt(1));
    }
    pashword += result;
    console.log("🚀 => generatePashword => pashword", pashword);
  }

  return pashword;
};
