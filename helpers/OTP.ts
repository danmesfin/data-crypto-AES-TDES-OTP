import pad from 'one-time-pad';
import { enc } from 'crypto-js';

export const encryptOTP = (str: any, key: any) => {
    return pad.encrypt(str, key);
}

export const decryptOTP = (str: any, key: any) => {
    return pad.encrypt(str, key);
}
