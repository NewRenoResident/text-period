"use client";

import Link from "next/link";

const RecommendedUsers = ({ users }: { users: any }) => {
  return (
    <div className="flex flex-col gap-2 ">
      {users.users.map((user: any) => (
        <div key={user.email}>
          <Link href={`/user/${user._id}`}>
            <div className="bg-sky-500 p-2 rounded-full">{user.username}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default RecommendedUsers;
