import React, { useState } from "react";
import background from "../../assets/LoginBackground.jpg";
import LoginForm from "./LoginForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
const LoginScreen = () => {
  const [checkLogin, setCheckLogin] = useState(true);
  const changeForm = () => {
    setCheckLogin(!checkLogin);
  };
  return (
    <div className=" w-screen h-screen text-white items-center justify-center flex">
      <img className="relative w-screen h-screen" src={background} />
      <div className="absolute w-1/4 backdrop-blur-sm border-2 shadow-2xl border-solid border-gray-600 px-2 rounded-xl py-5 ">
        {checkLogin ? (
          <LoginForm changeForm={changeForm} />
        ) : (
          <ForgotPasswordForm changeForm={changeForm} />
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
