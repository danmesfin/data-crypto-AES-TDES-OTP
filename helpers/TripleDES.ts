import { TripleDES, enc } from "crypto-js";

export const encryptTDES = (str: string | CryptoJS.lib.WordArray, key: string | CryptoJS.lib.WordArray) => {
    // const decodedStr = decodeURIComponent(str);
    return TripleDES.encrypt(str, key);
  };

  export const decryptTDES = (str: string | CryptoJS.lib.CipherParams, key: string | CryptoJS.lib.WordArray) => {
    // const decodedStr = decodeURIComponent(str);
    return TripleDES.decrypt(str, key).toString(enc.Utf8);
  };
