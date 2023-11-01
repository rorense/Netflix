import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";

// API route to get current user
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if method is a GET request
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { currentuser } = await serverAuth(req);

    return res.status(200).json({ currentuser });
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
