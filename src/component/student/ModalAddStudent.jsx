import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { IoIosPersonAdd } from "react-icons/io";

const ModalAddStudent = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  const handleCancel = () => {
    closeModal();
  };
  const handleOk = () => {
    form.submit();
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const clearForm = () => {
    form.resetFields();
  };
  const handleFinish = () => {
    console.log("Success:", form.getFieldsValue());
    clearForm();
    setIsShowModal(false);
  };
  const onFill = () => {
    form.setFieldsValue({
      password: Math.random().toString(36).slice(-8),
    });
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        className="flex justify-center items-center"
      >
        <IoIosPersonAdd /> Add student
      </Button>
      <Modal
        okText="Add"
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        title="Add student"
        open={isShowModal}
        footer={
          <div>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button
              onClick={clearForm}
              className="mx-2 text-white bg-red-500 hover:bg-red-300"
            >
              Clear Form
            </Button>
            <Button onClick={handleOk} type="primary">
              Add
            </Button>
          </div>
        }
      >
        <Form
          layout="vertical"
          initialValues={{
            password: Math.random().toString(36).slice(-8),
          }}
          form={form}
          onFinish={handleFinish}
        >
          <Form.Item
            label="Student name"
            rules={[
              {
                required: true,
                message: "Please input student name!",
              },
            ]}
            name="studentName"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Student ID"
            rules={[
              {
                required: true,
                message: "Please input student ID!",
              },
            ]}
            name="studentID"
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Student email"
            name="studentEmail"
            rules={[
              {
                required: true,
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Student class"
            name="studentClass"
            rules={[
              {
                required: true,
                message: "Please input student class!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Major" name="studentMajor">
            <Select
              defaultValue="lucy"
              className="w-full text-center"
              onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
          </Form.Item>
          <div className="flex justify-between items-center">
            <Form.Item label="Password" name="password">
              <Input disabled className="text-black cursor-default" />
            </Form.Item>
            <Button onClick={onFill}>Reset Password</Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalAddStudent;
