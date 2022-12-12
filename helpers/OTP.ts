const PAD = require("one-time-pad");

export const encryptOTP = (str: String|any, key: String|any) => {
    const encryptedText =  PAD.encrypt(str, key);
    return encryptedText.toString();
}

export const decryptOTP = (str: String| any, key: String| any) => {
    return PAD.encrypt(str, key);
}
