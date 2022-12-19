 const PAD = require("one-time-pad")
//encrypt
export const encryptOTP = (str: String|any, key: String|any) => {
    const encryptedText =  PAD.encrypt(str, key);
    return encryptedText.toString();
}
// decrypt
export const decryptOTP = (str: String| any, key: String| any) => {
    return PAD.decrypt(str, key);
}
/*
const { OneTimePad } = require('one-time-pad');

const plainText = 'Hello World!';
const plainTextBuffer = Buffer.from(plainText, 'utf8')

// Secure Pad the length of plainText (Keep Secure!)
const pad = OneTimePad.generatePad(plainTextBuffer);

const encryptedData = OneTimePad.encrypt(pad, plainTextBuffer);
console.log(`${Buffer.from(encryptedData).toString('base64')}`);

const decryptedData = OneTimePad.decrypt(pad, encryptedData);
console.log(`Decrypted Data: ${Buffer.from(decryptedData).toString('utf8')}`);
*/