import { Button, Form, Input, message, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { IoIosPersonAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataBranch } from "../../redux/slice/BranchSlice";
import { addStudent } from "../../api/student";
import { addStudentAction } from "../../redux/slice/StudentSlice";

const ModalAddStudent = () => {
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
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const clearForm = () => {
    form.resetFields();
  };
  const handleFinish = async () => {
    const { userName, studentId, branchId, fullName, email } =
      form.getFieldsValue();
    const formData = {
      userName: userName,
      // passHashed: password,
      email: email,
      fullName: fullName,
      studentId: studentId,
      branchId: branchId,
    };
    try {
      const response = await addStudent(formData);
      console.log(response);
      dispatch(
        addStudentAction({
          id: response.id,
          role: response.role.roleName,
          userName: response.userName,
          email: response.email,
          status: response.status,
        })
      );
      messageAPI.success("Add student successfully");
    } catch (error) {
      console.log(error);
      messageAPI.error(error.message);
    }
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
      {contexHolder}
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
            branchId: "",
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
            label="Student Code"
            rules={[
              {
                required: true,
                message: "Please input student code!",
              },
            ]}
            name="studentId"
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
          <Form.Item
            label="Full name"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please enter a student name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Branch"
            name="branchId"
            rules={[
              {
                validator: (_, value) =>
                  value === ""
                    ? Promise.reject(new Error("Please select a major!"))
                    : Promise.resolve(),
              },
            ]}
          >
            <Select
              className="w-full text-center"
              onChange={handleChange}
              options={[{ value: "", label: "Select Major" }, ...option]}
            />
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

export default ModalAddStudent;
