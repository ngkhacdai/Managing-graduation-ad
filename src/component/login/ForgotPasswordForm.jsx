import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const ForgotPasswordForm = ({ changeForm }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
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
          label={<label className="text-white">Email</label>}
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <div className="flex pb-2 items-center justify-end">
          <p
            onClick={changeForm}
            className="text-white hover:text-blue-700 cursor-pointer"
          >
            Back to login
          </p>
        </div>
        <Form.Item className="text-center">
          <Button
            className="w-full bg-white text-black font-bold hover:bg-slate-400"
            type="primary"
            htmlType="submit"
          >
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
