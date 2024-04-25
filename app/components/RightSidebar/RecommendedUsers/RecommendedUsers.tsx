"use client";
import Link from "next/link";
import { IUser } from "@/models/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getRandomUsers, getUserByEmail } from "@/lib/serverActions";
import { auth } from "@/lib/auth";
import Subscribe from "../../Subscribe/Subscribe";
import { useSessionUserStore } from "@/app/store/sessionUser";
interface Props {
  users: IUser[];
}

const RecommendedUsers = () => {
  const [users, setUsers] = useState([]);
  const { sessionUser } = useSessionUserStore();
  useEffect(() => {
    const getUsers = async () => {
      const usersResp = await getRandomUsers(5);
      const users = JSON.parse(usersResp);
      setUsers(users);
    };
    getUsers();
  }, []);
  return (
    <div className="flex flex-col gap-2 ">
      {users.map((user) => {
        if (user._id !== sessionUser?._id) {
          return (
            <div key={user.email}>
              <div className="flex gap-10 justify-between items-center hover:bg-[#878e9b] hover:bg-opacity-35 p-1 rounded-3xl">
                <Link href={`/user/${user._id}`}>
                  <div className="flex gap-2">
                    {user?.img ? (
                      <div className="w-10 h-10 relative">
                        <Image
                          src={`/uploads/${user?.img}`}
                          alt="image profile"
                          fill
                          sizes="1"
                          objectFit="cover"
                          className="rounded-full w-auto h-auto"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-[#6b7280] rounded-full"></div>
                    )}

                    <div className=" p-2 rounded-full">{user.username}</div>
                  </div>
                </Link>
                <Subscribe subscribeTo={user} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default RecommendedUsers;
