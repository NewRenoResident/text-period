"use client";
import Link from "next/link";
import { IUser } from "@/models/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getRandomUsers, getUserByEmail } from "@/lib/serverActions";
import { auth } from "@/lib/auth";
import SubscribeButton from "../../SubscribeButton/SubscribeButton";
interface Props {
  users: IUser[];
}

const RecommendedUsers = () => {
  const [users, setUsers] = useState([]);

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
        return (
          <div key={user.email}>
            <Link
              href={`/user/${user._id}`}
              className="flex gap-2 justify-between items-center hover:bg-[#878e9b] hover:bg-opacity-35 p-1 rounded-3xl"
            >
              <div className="flex gap-2">
                {user?.img ? (
                  <div className="w-10 h-10 relative">
                    <Image
                      src={`/uploads/${user?.img}`}
                      alt="image profile"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-[#6b7280] rounded-full"></div>
                )}

                <div className=" p-2 rounded-full">{user.username}</div>
              </div>
              <SubscribeButton
                label={["Подписаться", "Отписаться"]}
                subscribeTo={JSON.parse(JSON.stringify(user))}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default RecommendedUsers;
