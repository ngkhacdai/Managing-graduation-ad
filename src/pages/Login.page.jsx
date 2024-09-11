import React, { useEffect } from "react";
import LoginScreen from "../component/login/Login.screen";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const publicPaths = ["/"];
    if (publicPaths.includes(location.pathname) && token) {
      navigate("/home");
    }
  }, [navigate, location.pathname, token]);
  return (
    <div>
      <LoginScreen />
    </div>
  );
};

export default Login;
