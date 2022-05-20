import jsSHA from "jssha";

export const generatePashword = (toHash: string): string => {
  const shaObj = new jsSHA("SHA3-512", "TEXT", { encoding: "UTF8" });

  shaObj.update(toHash);
  const pashword = shaObj.getHash("HEX");
  console.log("🚀 => generatePashword => pashword", pashword);

  pashword.substring(0, 7) + pashword.substring(pashword.length - 8);
  console.log(
    "🚀 => ",
    pashword.substring(0, 8) + pashword.substring(pashword.length - 8)
  );

  return pashword;
};
