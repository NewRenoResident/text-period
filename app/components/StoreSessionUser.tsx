"use client";
import React, { useEffect, useState } from "react";
import { AuthResponse, auth } from "@/lib/auth";
import { getUserByEmail } from "@/lib/serverActions";
import { useSessionUserStore } from "../store/sessionUser";
import { ISessionUser } from "./Nav/Nav";
import { Session } from "next-auth";

interface Props {
  children: React.ReactNode;
  session: Session | null;
}

export default function StoreSessionUser({ children, session }: Props) {
  const { setSessionUser } = useSessionUserStore();
  useEffect(() => {
    const getSessionUser = async () => {
      const user = await getUserByEmail(session?.user?.email!);
      setSessionUser(user);
    };
    getSessionUser();
  }, []);

  return <div>{children}</div>;
}
