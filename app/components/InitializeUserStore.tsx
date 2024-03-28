"use client";

import { auth } from "@/lib/auth";
import { useUserStore } from "@/store";
import { Session, User } from "next-auth";

const InitializeUserStore = ({
  children,
  authUser,
}: {
  children: React.ReactNode;
  authUser: User | undefined;
}) => {
  return <div>{children}</div>;
};

export default InitializeUserStore;
