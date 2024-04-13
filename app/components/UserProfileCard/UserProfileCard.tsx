"use client";
import React, { useEffect, useState } from "react";
import { formatDate } from "@/lib/date";
import Image from "next/image";
import schedule from "@/public/schedule.svg";
import ChangeProfileInfo from "../ChangeProfileInfo/ChangeProfileInfo";
import UserHeader from "../UserHeader/UserHeader";
import { getUserTweetsCount, loadUser } from "@/lib/serverActions";
import { IUser } from "@/models/types";

function UserProfileCard({ userId }: { userId: string }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [tweets, setTweets] = useState<any>(null);

  useEffect(() => {
    const loadAsyncUser = async () => {
      const data = await loadUser(userId);
      const dataj = JSON.parse(data.user);
      setUser(dataj);
    };
    const loadTweetsCount = async () => {
      const data = await getUserTweetsCount(userId);

      setTweets(data.count);
    };
    loadTweetsCount();
    loadAsyncUser();
  }, []);

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <UserHeader username={user.username} tweetsCount={tweets} />
      <div className="container relative grid grid-rows-[65%_35%] h-64">
        <div className="w-full bg-[#333639]">
          <Image
            src={`/uploads/${user.wallpaperImg}`}
            alt="user wallpaper"
            layout="fill"
            className="object-cover"
          />
          <ChangeProfileInfo setUser={setUser} user={user} userId={userId} />
        </div>
        <div className="w-full h-[15vh]">
          <div className="p-4 flex flex-row-reverse justify-between"></div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "65%",
            left: "2%",
            transform: "translate(0, -50%)",
          }}
          className="rounded-full md:w-32 md:h-32 w-[20vw] h-[20vw] bg-black center-div"
        >
          {user.img && (
            <Image
              alt="user image"
              layout="fill"
              src={`/uploads/${user.img}`}
              className="object-cover rounded-full p-1"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <div>
          <p className="font-bold text-2xl">{user.username}</p>
          <p className="text-gray-400 text-opacity-60">
            {user?.profileInfo?.fullName ||
              "Вы пока не задали имя, введите его в настройках"}
          </p>
        </div>
        <div className="text-gray-400 text-opacity-60 flex gap-2">
          <Image
            className="invert"
            src={schedule}
            alt="schedule"
            width={15}
            height={15}
          />
          <p>Регистрация: {formatDate(user.createdAt)}</p>
        </div>
        <div className="text-gray-400 text-opacity-60 flex gap-8">
          <p className="text-sm">
            <span className="text-white text-base">
              {user.followers?.length}{" "}
            </span>
            в читаемых
          </p>
          <p className="text-sm">
            <span className="text-white text-base">
              {user.following?.length}{" "}
            </span>
            {user.following?.length === 1 ? "читает" : "читают"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
