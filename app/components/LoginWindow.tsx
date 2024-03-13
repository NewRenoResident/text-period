import Button from "./Button";

const LoginWindow = () => {
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
                <button className="bg-white text-black block px-10 mt-5 mb-4 rounded-3xl py-2">
                  Войти гугл
                </button>
                <button>Войти</button>
                <Button
                  color="white"
                  label="Зарегистрироваться с Apple ID"
                ></Button>
                <Button color="blue" label="Зарегистрироваться"></Button>
                <p>
                  Регистрируясь, вы соглашаетесь с Условиями предоставления
                  услуг и Политикой конфиденциальности, а также с Политикой
                  использования файлов cookie.
                </p>
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

export default LoginWindow;
