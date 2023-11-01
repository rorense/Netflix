import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import signOutFromAccount from "@/components/signout";
import { getServerSession } from "next-auth/next";

export async function getServerSideProps(context: NextPageContext) {
  // @ts-ignore
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default function page() {
  return (
    <>
      <div className="text-4xl text-green-500">Netflix Clone</div>;
      <button onClick={signOutFromAccount} className="h-10 w-full bg-white">
        Logout
      </button>
      ;
    </>
  );
}
