"use client";
import { useState } from "react";
import LoginWindow from "./LoginWindow";

interface LoginI {
  children: React.ReactNode;
}

const Login: React.FC<LoginI> = ({ children }) => {
  const [displayLoginWindow, setdisplayLoginWindow] = useState(true);
  return displayLoginWindow ? <LoginWindow /> : <div>{children}</div>;
};

export default Login;
