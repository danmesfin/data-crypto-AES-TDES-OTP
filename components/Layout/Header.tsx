/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  useSession,
  signOut,
  getSession,
  GetSessionParams,
} from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Crypto-App</title>
        <meta name="description" content="Developed by Daniel Mesfin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session ? (
        <div className="flex pl-5 justify-between shadow-sm border-b py-1">
          <div className="font-bold text-3xl text-red-600">DataCrypto</div>
          <div className="flex font-semibold p-1 mx-2 text-sm text-red-600">
            <Link
              href={"https://github.com/danmesfin/data-crypto-AES-TDES-OTP"}
              className="mx-2 hover:text-red-600"
            >
              Github
            </Link>
            <div className="flex">
              <div className="flex mx-2 justify-center">
                <img
                  className="mx-1 w-6 h-6 rounded-full"
                  src={session?.user?.image}
                  alt="profile-image"
                />
                <div className="text-sm font-semibold">
                  {session?.user?.name}
                </div>
              </div>
              <button
                onClick={() => signOut()}
                className="w-24 mx-2 rounded-md bg-red-600 hover:bg-red-700 text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
