import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col mx-auto h-screen justify-center">
        <img
          src={session.user?.image}
          className="h-12 w-12 rounded-full"
          alt="profile_image"
        />
        <div>Welcome, {session.user?.email}</div>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col mx-auto h-screen justify-center">
        <div className="flex flex-col justify-center border rounded-md mx-auto px-4 py-5 shadow">
          <div className="text-md font-semibold mt-2">
            You are not signed in
          </div>
          <button
            className="w-24 m-2 text-white bg-red-700 hover:bg-red-600 rounded-lg"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }
}

export default login;
