import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export { auth as middleware } from "./lib/auth";
