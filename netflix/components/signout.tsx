"use client";

import { signOut } from "next-auth/react";

const signOutFromAccount = () => {
  signOut();
};

export default signOutFromAccount;
