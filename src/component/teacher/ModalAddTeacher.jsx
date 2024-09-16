import { Button, Form, Input, message, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { IoIosPersonAdd } from "react-icons/io";
import { addTeacher } from "../../api/teacher";
import { useDispatch, useSelector } from "react-redux";
import { addTeacherAction } from "../../redux/slice/TeacherSlice";
import { fetchDataBranch } from "../../redux/slice/BranchSlice";

const ModalAddTeacher = () => {
  const [messageAPI, contexHolder] = message.useMessage();
  const [isShowModal, setIsShowModal] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const major = useSelector((state) => state.branch.data);
  const option = major.map((item) => {
    return { value: item.id, label: item.name };
  });

  useEffect(() => {
    dispatch(fetchDataBranch());
  }, []);
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
  const clearForm = () => {
    form.resetFields();
  };
  const handleFinish = async () => {
    console.log("Success:", form.getFieldsValue());
    try {
      const response = await addTeacher(form.getFieldValue());
      console.log(response);
      dispatch(
        addTeacherAction({
          accountId: response.id,
          role: response.role.roleName,
          userName: response.userName,
          email: response.email,
          status: response.status,
          limitOfMentees: "0/5",
        })
      );
      messageAPI.success("Add teacher successfully");
    } catch (error) {
      console.log(error);
      messageAPI.error(error.message);
    }
    clearForm();
    setIsShowModal(false);
  };
  const onFill = () => {
    form.setFieldsValue({
      passHashed: Math.random().toString(36).slice(-8),
    });
  };
  return (
    <div>
      {contexHolder}
      <Button
        type="primary"
        onClick={showModal}
        className="flex justify-center items-center"
      >
        <IoIosPersonAdd /> Add teacher
      </Button>
      <Modal
        okText="Add"
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        title="Add teacher"
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
            passHashed: Math.random().toString(36).slice(-8),
            branchId: "",
          }}
          form={form}
          onFinish={handleFinish}
        >
          <Form.Item
            label="username"
            rules={[
              {
                required: true,
                message: "Please input username!",
              },
            ]}
            name="userName"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Teacher email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input email!",
              },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Full name"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input full name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Degree"
            name="degree"
            rules={[
              {
                required: true,
                message: "Please input degree!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Major"
            name="branchId"
            rules={[
              {
                required: true,
                message: "Please select major!",
              },
            ]}
          >
            <Select
              className="w-full text-center"
              options={[{ value: "", label: "Select Major" }, ...option]}
            />
          </Form.Item>
          {/* <div className="flex justify-between items-center">
            <Form.Item label="Password" name="passHashed">
              <Input disabled className="text-black cursor-default" />
            </Form.Item>
            <Button onClick={onFill}>Reset Password</Button>
          </div> */}
        </Form>
      </Modal>
    </div>
  );
};

export default ModalAddTeacher;
