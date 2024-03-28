import { signIn } from "@/lib/auth";
import CredentialsButton from "../../Buttons/CredentialsButton/CredentialsButton";
import GitButton from "../../Buttons/GitButton/GitButton";
import TextPeriodButton from "../../Buttons/TextPeriodButton/TextPeriodButton";
import { goToLoginPage, goToRegisterPage, register } from "@/lib/serverActions";
import Image from "next/image";
import { LiaSignInAltSolid } from "react-icons/lia";
import github_white from "@/public/github-mark-white.svg";
import { FaSignInAlt } from "react-icons/fa";
import loginSVG from "@/public/images/login.svg";
import LoginBottom from "./LoginBottom/LoginBottom";
const Login = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="flex-grow">
        <div className=" h-full flex flex-col md:flex-row justify-around md:items-center p-3 ">
          <div className="w-1/3">
            <img className="w-full max-w-xl" src="/white.svg" alt="logo" />
          </div>
          <div className="w-1/3 h-3/4 text-white flex flex-col justify-between">
            <div className="">
              <h1 className=" font-bold text-5xl">В курсе происходящего</h1>
            </div>
            <div className="">
              <div className="flex flex-col gap-2 justify-center items-start">
                <GitButton />

                <TextPeriodButton
                  width={"16rem"}
                  action={goToRegisterPage}
                  color="blue"
                >
                  <div className="flex justify-center items-center gap-1 pt-1">
                    <LiaSignInAltSolid size={22} />
                    <p>Зарегистрироваться</p>
                  </div>
                </TextPeriodButton>
              </div>
            </div>
            <div>
              <p className="text-xl font-bold">Уже зарегистрированы?</p>
              <TextPeriodButton
                width={"16rem"}
                action={async () => {
                  "use server";
                  await signIn();
                }}
                color="blue"
              >
                <div className="flex justify-center items-center gap-1 pt-1">
                  <FaSignInAlt size={20} />
                  <p>Войти</p>
                </div>
              </TextPeriodButton>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-10 ">
        <LoginBottom />
      </div>
    </div>
  );
};

export default Login;
