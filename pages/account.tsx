import React from "react";
import {
  useSession,
  signOut,
  getSession,
  GetSessionParams,
} from "next-auth/react";

const account = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session, status } = useSession({ required: true });

  if (status === "authenticated") {
    return (
      <div className="flex flex-col mx-auto h-screen sjustify-center">
        <div className="text-lg font-bold">My Account</div>
        <p>Welcome, {session.user?.name}</p>
        <button
          className="w-24 m-2 text-white bg-red-700 hover:bg-red-600 rounded-lg"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  } else {
    <div>
      <p>you are not signed in</p>
    </div>;
  }
};

export default account;

export const getServerSideProps = async (
  context: GetSessionParams | undefined
) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: { session },
  };
};
