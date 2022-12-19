import { AES, enc } from "crypto-js";

export const encryptAES = (str: string | CryptoJS.lib.WordArray, 
    key: string | CryptoJS.lib.WordArray) => {
    const ciphertext = AES.encrypt(str, key);
    return ciphertext.toString();
  };

 export const decryptAES = (str: string | CryptoJS.lib.CipherParams,
     key: string | CryptoJS.lib.WordArray) => {
    // const decodedStr = decodeURIComponent(str);
    return AES.decrypt(str, key).toString(enc.Utf8);
  };