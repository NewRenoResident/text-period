import { signIn } from "@/lib/auth";
import CredentialsButton from "../Buttons/CredentialsButton/CredentialsButton";
import GitButton from "../Buttons/GitButton/GitButton";
import TextPeriodButton from "../Buttons/TextPeriodButton/TextPeriodButton";
import { goToLoginPage, goToRegisterPage, register } from "@/lib/serverActions";
const Login = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="flex-grow">
        <div className=" h-full flex justify-around items-center">
          <div className="w-1/3">
            <img className="w-full max-w-xl" src="/white.svg" alt="logo" />
          </div>
          <div className="w-1/3 h-3/4 text-white flex flex-col justify-between">
            <div className="">
              <h1 className="text-5xl font-bold">В курсе происходящего</h1>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Присоединяйтесь сегодня</h2>
              <div>
                <GitButton />
                <TextPeriodButton
                  action={goToRegisterPage}
                  label="Зарегистрироваться"
                  color="blue"
                />
                <TextPeriodButton
                  action={goToLoginPage}
                  label="Войти"
                  color="blue"
                />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold">Уже зарегистрированы?</p>
              <button>Войти</button>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-5 bg-white">Bottom</div>
    </div>
  );
};

export default Login;
