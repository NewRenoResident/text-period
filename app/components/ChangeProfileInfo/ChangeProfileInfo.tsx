"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ChangeProfileInfoFormData } from "@/app/components/ChangeProfileInfo/ChangeProfileInfoFormData";
import { updateUser } from "@/lib/serverActions";
import { IUser } from "@/models/types";
import { useSessionUserStore } from "@/app/store/sessionUser";

const fullScreenStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  display: "flex",
};

const ChangeProfileInfo = ({
  user,
  userId,
  setUser,
}: {
  user: IUser | null;
  userId: string;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setSessionUser } = useSessionUserStore();
  const updateUserWithId = updateUser.bind(null, userId);

  const handleUpdateUserWithId = async (e: FormData) => {
    const user = await updateUserWithId(e);
    setSessionUser(user);
    setUser(user);
  };

  const formSubmitHandler = (e: React.FormEvent) => {
    const formElements = e.target?.elements;

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];

      if (
        element.tagName === "INPUT" &&
        element.name &&
        element.type !== "file"
      ) {
        const value = element?.value || user?.profileInfo[element.name] || "";

        element.value = value;
      }
    }
    setIsOpen(false);
  };

  return (
    <div className="absolute p-4 bottom-5 right-5 ">
      {isOpen && (
        <div
          className="bg-blue-300 bg-opacity-20 justify-center items-center "
          style={fullScreenStyle as React.CSSProperties}
        >
          <div className="md:w-3/6 md:h-5/6 w-full h-full rounded-xl bg-black p-4 overflow-auto">
            <div className="flex justify-between mb-2 ">
              <div className="flex justify-center items-center gap-8 ">
                <button onClick={() => setIsOpen(false)}>
                  <IoMdClose size={25} />
                </button>
                <p className="text-xl ">Изменить профиль</p>
              </div>
              <button
                form="userDataForm"
                type="submit"
                className="text-black bg-white rounded-3xl px-4 py-1"
              >
                Сохранить
              </button>
            </div>
            <form
              id="userDataForm"
              className="bg-black"
              onSubmit={formSubmitHandler}
              action={handleUpdateUserWithId}
            >
              <ChangeProfileInfoFormData />
            </form>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" hover:bg-white hover:bg-opacity-10  border border-white  border-solid rounded-3xl border-opacity-50 py-1 px-3"
      >
        Изменить профиль
      </button>
    </div>
  );
};

export default ChangeProfileInfo;
