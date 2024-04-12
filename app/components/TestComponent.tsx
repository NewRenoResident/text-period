"use client";

import { useUserStore } from "../store/user";

const TestComponent = () => {
  const user = useUserStore((state) => state.user);

  return <div>{user.fullName}</div>;
};

export default TestComponent;
