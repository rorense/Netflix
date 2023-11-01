import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prismaDB from "@/libs/prismadb";

// Protecting Routes and maintain sessions
const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  // Check if session exists
  if (!session?.user?.email) {
    throw new Error("You must be logged in to do that");
  }

  //   Checking if email exists in database
  const currentuser = await prismaDB.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  //   If user doesn't exist, throw error
  if (!currentuser) {
    throw new Error("User not found");
  }

  return { currentuser };
};

export default serverAuth;
