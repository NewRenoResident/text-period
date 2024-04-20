"use client";

import { useUserStore } from "../store/user";

const TestComponent = ({ children }) => {
  const user = useUserStore((state) => state.user);

  return <div>{children}</div>;
};

export default TestComponent;
