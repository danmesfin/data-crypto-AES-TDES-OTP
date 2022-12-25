import React from "react";
import {
  useSession,
  signIn,
  getSession,
  GetSessionParams,
} from "next-auth/react";

function Login() {
  const { data: session } = useSession();

  if (session) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div className="flex mx-auto justify-center h-screen">
        <div className="w-1/2 bg-red-700 justify-center">
          <div className="pl-10 text-7xl text-white mt-40 mx-auto font-extrabold">
            Welcome to DataCrypto!
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center border rounded-md mx-auto px-4 py-5 shadow">
          <div className="text-xl font-bold mt-2">
            Please Sign-in to continue !
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

export default Login;

export const getServerSideProps = async (
  context: GetSessionParams | undefined
) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: { session },
  };
};
