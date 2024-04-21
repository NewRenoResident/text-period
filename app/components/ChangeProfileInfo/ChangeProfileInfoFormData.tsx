import * as React from "react";
import { FaCamera } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IUser } from "@/models/types";

interface IFormDefaultDate {
  fullName?: string;
  bio?: string;
  location?: string;
  website?: string;
  dateOfBirth?: string;
}

export const ChangeProfileInfoFormData = ({}: {}) => {
  const [wallpaperURL, setWallpaperURL] = useState("");
  const [userPicURL, setUserPicURL] = useState("");
  const cleanupFunctionRef = useRef(() => {});

  const wallpaperInputRef = useRef<HTMLInputElement>(null);
  const userPicInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    return () => {};
  }, []);

  const handleFileInputClick = (ref: any) => {
    ref.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setUrl: React.SetStateAction<any>
  ) => {
    cleanupFunctionRef.current();

    const file = event?.target?.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUrl(url);

      cleanupFunctionRef.current = () => URL.revokeObjectURL(url);
    }
  };

  return (
    <>
      <div className="w-full h-64 items-center justify-around flex flex-col relative">
        {wallpaperURL && (
          <Image
            src={wallpaperURL}
            fill={true}
            sizes="1"
            className="object-cover w-auto h-auto"
            alt="wallpaper"
          />
        )}

        <div></div>
        <div
          onClick={() => {
            handleFileInputClick(wallpaperInputRef);
          }}
          className="z-10 bg-white cursor-pointer hover:bg-gray-600 hover:bg-opacity-50 p-3 bg-opacity-5 rounded-full"
        >
          <FaCamera size={20} />
          <input
            name="wallpaperFile"
            type="file"
            onChange={(e) => handleFileChange(e, setWallpaperURL)}
            accept="image/*"
            className="hidden"
            ref={wallpaperInputRef}
          />
        </div>
        <div className="z-10 h-24 w-24 bg-gray-600 bg-opacity-35 self-start cursor-pointer hover:bg-gray-600 hover:bg-opacity-50 rounded-full flex justify-center items-center relative">
          {userPicURL && (
            <Image
              src={userPicURL}
              fill={true}
              sizes="1"
              className="p-1 object-cover rounded-full w-auto h-auto"
              alt="wallpaper"
            />
          )}
          <div
            onClick={() => {
              handleFileInputClick(userPicInputRef);
            }}
            className="z-10 bg-white p-3 bg-opacity-5 rounded-full"
          >
            <FaCamera size={20} />
            <input
              name="userPicFile"
              type="file"
              onChange={(e) => handleFileChange(e, setUserPicURL)}
              accept="image/*"
              className="hidden"
              ref={userPicInputRef}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-white text-sm font-bold mb-2"
          >
            Имя
          </label>
          <input
            type="text"
            name="fullName"
            className="placeholder:text-opacity-20 placeholder:text-white focus:border-cyan-600 focus:border-2 outline-none shadow appearance-none border border-solid rounded w-full py-2 px-3 text-grey-darker bg-black border-white border-opacity-40 text-white"
            placeholder="Знаменитый литовский философ"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="about"
            className="block text-white text-sm font-bold mb-2 "
          >
            О себе
          </label>
          <textarea
            name="about"
            rows={4}
            className="placeholder:text-opacity-20 placeholder:text-white focus:border-cyan-600 focus:border-2 outline-none border border-solid border-white border-opacity-40 shadow appearance-none  rounded w-full py-2 px-3 text-grey-darker bg-black  text-white"
            placeholder="Beer..."
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-white text-sm font-bold mb-2 "
          >
            Местоположение
          </label>
          <input
            type="text"
            name="location"
            className="placeholder:text-opacity-20 placeholder:text-white border border-solid border-white focus:border-cyan-600 focus:border-2 outline-none border-opacity-40 shadow appearance-none  rounded w-full py-2 px-3 text-grey-darker bg-black  text-white"
            placeholder="РТУ МИРЭА, Москва"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="website"
            className="block text-white text-sm font-bold mb-2"
          >
            Веб-сайт
          </label>
          <input
            type="url"
            name="website"
            className="focus:border-cyan-600 placeholder:text-opacity-20 placeholder:text-white focus:border-2 outline-none border border-solid border-white border-opacity-40 shadow appearance-none  rounded w-full py-2 px-3 text-grey-darker bg-black  text-white"
            placeholder="www.state.gov"
          />
        </div>
        <label
          htmlFor="website"
          className="block text-white text-sm font-bold mb-2"
        >
          Дата рождения
        </label>
        <input
          type="date"
          name="dateOfBirthday"
          className="focus:border-cyan-600 focus:border-2 outline-none border border-solid border-white border-opacity-40 shadow appearance-none  rounded w-full py-2 px-3 text-grey-darker bg-black  text-white"
          placeholder="26.12.1991"
        />
      </div>
    </>
  );
};
