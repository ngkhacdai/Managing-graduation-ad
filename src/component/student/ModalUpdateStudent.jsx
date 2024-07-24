import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";

const ModalUpdateStudent = ({ student, closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  const handleCancel = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      closeModal();
    }, 300);
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
    setIsModalOpen(false);
  };
  const onFill = () => {
    form.setFieldsValue({
      password: Math.random().toString(36).slice(-8),
    });
  };
  return (
    <div>
      <Modal
        cancelText="Cancel"
        okText="Update"
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        open={isModalOpen}
        title="Update major"
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
              Update
            </Button>
          </div>
        }
      >
        <Form
          layout="vertical"
          initialValues={{
            password: student.password,
            studentName: student.studentName,
            studentID: student.id,
            studentEmail: student.email,
            studentClass: student.class,
            studentMajor: student.major,
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

export default ModalUpdateStudent;
