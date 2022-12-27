// @ts-nocheck
import Crypto from "../components/Crypto";

import {
  useSession,
  signOut,
  getSession,
  GetSessionParams,
} from "next-auth/react";

export default function Index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session, status } = useSession({ required: true });

  if (status === "authenticated") {
    return <Crypto />;
  } else {
    <div>
      <p>you are not signed in</p>
    </div>;
  }
}
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
