// @ts-nocheck
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { encryptAES, decryptAES } from "../../helpers/AES";
import { encryptTDES, decryptTDES } from "../../helpers/TripleDES";
import { encryptOTP, decryptOTP } from "../../helpers/OTP";

export default function Crypto() {
  // encription state catcher
  const [text, setText] = useState(""); // an inupt message to be encrypted
  const [algorithm, setAlgorithm] = useState("AES"); //the algorithm used to encrypt the message
  const [key, setKey] = useState(""); // encryption key
  const [encrypted, setEncryptedText] = useState(""); // result of encrypted message

  // decryption state
  const [encTextInput, setEncTextInput] = useState("");
  const [decKey, setDecKey] = useState("");
  const [decryptAlgorithm, setDecryptionAlgorithm] = useState("AES"); //the algorithm used to decrypt the message
  const [decryptedText, setDecryptedText] = useState("");

  // input text field handler
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  // encription handler function
  const handleEncryption = () => {
    switch (algorithm) {
      case "AES":
        setEncryptedText(encryptAES(text, key));
        break;
      case "TripleDES":
        setEncryptedText(encryptTDES(text, key));
        break;
      case "OTP":
        setEncryptedText(encryptOTP(text, key));
        break;
      default:
        break;
    }
  };

  // decription handler function
  const handleDecryption = () => {
    switch (decryptAlgorithm) {
      case "AES":
        setDecryptedText(decryptAES(encTextInput, decKey));
        break;
      case "TripleDES":
        setDecryptedText(decryptTDES(encTextInput, decKey));
        break;
      case "OTP":
        setDecryptedText(decryptOTP(encTextInput, decKey));
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col mx-0 bg-gray-100">
      <main className="flex flex-col md:px-36">
        <div className="flex flex-wrap md:flex-nowrap justify-center text-semibold my-10  ">
          <div
            className="w-full md:w-1/2 flex flex-col justify-center mx-2 mt-5 p-3
           bg-gray-300 border border-gray-300 shadow"
          >
            <div className="my-2 text-2xl text-red-900 font-mono font-bold">
              Encryption
            </div>
            <div className="flex flex-col mt-2">
              <label className="p-1 mx-2">Text</label>
              <textarea
                type="text"
                className="ml-3 w-3/4 border focus:border-blue-500 rounded-lg"
                onChange={(event) => handleInputChange(event)}
                value={text}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="p-1 mx-2">Key</label>
              <input
                type="text"
                name="key"
                placeholder=" ..."
                value={key}
                onChange={(event) => setKey(event.target.value)}
                className="w-3/4 ml-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="ml-2 p-1">Algorithm</label>
              <select
                id="Algo"
                name="Algo"
                className="rounded-lg ml-3 w-24"
                onChange={(event) => setAlgorithm(event.target.value)}
              >
                <option value="AES">AES</option>
                <option value="TripleDES">TripleDES</option>
                <option value="OTP">OTP</option>
              </select>
            </div>
            <button
              onClick={handleEncryption}
              className="my-4 mx-auto shadow-md rounded w-24 bg-red-700 hover:bg-red-600 text-white"
            >
              Encrypt
            </button>
            <textarea
              className="font-semibold text-xl w-3/4 mx-auto mt-5 bg-gray-50 p-2 rounded-lg"
              value={encrypted}
              readOnly="true"
            />
          </div>

          <div
            className="w-full md:w-1/2 flex flex-col justify-center mx-2 mt-5 p-3 border
           rounded-lg border-gray-300 bg-gray-300"
          >
            <div className="my-2 text-2xl text-red-900 font-mono font-bold">
              Decryption
            </div>
            <div className="flex flex-col mt-2">
              <label className="w-1/4 mt-1 mx-2">Text</label>
              <textarea
                type="text"
                className="h-12 w-3/4 mx-2 mt-1 border focus:border-blue-500 rounded-lg"
                value={encTextInput}
                onChange={(event) => setEncTextInput(event.target.value)}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="w-1/4 p-1 mx-2">Key</label>
              <input
                type="text"
                name="decr_key"
                placeholder=" ..."
                value={decKey}
                onChange={(event) => setDecKey(event.target.value)}
                className="w-3/4 mx-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="mx-2 p-1" s>
                Algorithm
              </label>
              <select
                id="Algo"
                name="Algo"
                className="ml-3 rounded-lg w-24"
                onChange={(event) => setDecryptionAlgorithm(event.target.value)}
              >
                <option value="AES">AES</option>
                <option value="TripleDES">3DES</option>
                <option value="OTP">OTP</option>
              </select>
            </div>
            <button
              onClick={handleDecryption}
              className="my-4 mx-auto shadow-md rounded w-24 bg-red-700 hover:bg-red-600 text-white"
            >
              Decrypt
            </button>

            <textarea
              className="font-semibold text-xl w-3/4 mx-auto mt-5 p-2 bg-gray-100 rounded-lg"
              value={decryptedText}
              readOnly={true}
            />
          </div>
        </div>
        <div className="rounded-lg py-2 my-2 mx-5 px-3 bg-gray-200">
          <p className="font-semibold text-sm">
            Note: for OTP enc-dec, the length of message and key has to be the
            same. for Eg. text = ABcdefG, key = lmnopqr
          </p>
        </div>
      </main>
    </div>
  );
}
