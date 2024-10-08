import { Button, Form, Input, Modal, Radio, Select } from "antd";
import React, { useEffect, useState } from "react";
import { updateTeacher } from "../../api/teacher";
import { updateTeacherAction } from "../../redux/slice/TeacherSlice";
import { useDispatch } from "react-redux";

const ModalUpdateTeacher = ({ teacher, closeModal, alertMessage }) => {
  console.log(teacher);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
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

  const clearForm = () => {
    form.resetFields();
  };
  const handleFinish = async () => {
    const { email, status, userName, limit } = form.getFieldsValue();
    const formData = {
      email,
      status,
      userName,
      menteesLimit: limit,
    };

    try {
      await updateTeacher(teacher.accountId, formData);
      const dataUpdate = {
        accountId: teacher.accountId,
        avatar: teacher.avatar,
        email,
        status,
        userName,
        limitOfMentees: teacher.limitOfMentees.split("/")[0] + "/" + limit,
      };
      dispatch(updateTeacherAction(dataUpdate));
    } catch (error) {
      console.log(error);
      alertMessage(error.message, "error");
    }
    setIsModalOpen(false);
    clearForm();

    setTimeout(() => {
      closeModal();
    }, 300);
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
        title="Update teacher"
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
            userName: teacher.userName,
            email: teacher.email,
            status: teacher.status,
            limit: teacher.limitOfMentees.split("/")[1],
          }}
          form={form}
          onFinish={handleFinish}
        >
          <Form.Item
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input user name!",
              },
            ]}
            name="userName"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Student email"
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Active" name="status">
            <Radio.Group
              options={[
                { label: "Active", value: "active" },
                { label: "Disabled", value: "disabled" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Mentee limit"
            name="limit"
            rules={[
              {
                required: true,
                message: "Please input mentee limit!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          {/* <div className="flex justify-between items-center">
            <Form.Item label="Password" name="password">
              <Input disabled className="text-black cursor-default" />
            </Form.Item>
            <Button onClick={onFill}>Reset Password</Button>
          </div> */}
        </Form>
      </Modal>
    </div>
  );
};

export default ModalUpdateTeacher;
