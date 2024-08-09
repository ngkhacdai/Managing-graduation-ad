import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { login } from "../../api/access";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ changeForm }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const form = {
      userName: values.userName,
      password: values.password,
    };
    try {
      const response = await login(form);
      if (response.role !== "ADMIN") {
        return message.error(
          "You are not have permission to login to this website"
        );
      }
      await localStorage.setItem("token", response.token);
      await localStorage.setItem("role", response.role.toLowerCase());
      messageApi.success("Login successfuly");
      navigate("/home");
    } catch (error) {
      console.log(error);

      return messageApi.error("Email or password are incorrect");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {contextHolder}
      <p className=" text-center text-2xl font-bold ">Login</p>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={<label className="text-white">Username</label>}
          name="userName"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<label className="text-white">Password</label>}
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <div className="flex items-center justify-end mb-2">
          <p
            onClick={changeForm}
            className="text-white hover:text-blue-700 cursor-pointer"
          >
            Forgot password?
          </p>
        </div>

        <Form.Item className="text-center">
          <Button
            className="w-full bg-white text-black font-bold hover:bg-slate-400"
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
