import { Button, Form, Input, message, Modal } from "antd";
import React, { useState } from "react";
import { addNewBranch } from "../../api/branch";
import { useDispatch } from "react-redux";
import { addBranch } from "../../redux/slice/BranchSlice";

const ModalAddMajor = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const [isShowModal, setIsShowModal] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsShowModal(true);
  };
  const handleOk = () => {
    form.submit();
  };
  const onFinish = async (values) => {
    try {
      const form = {
        branchName: values.branchName,
      };
      const response = await addNewBranch(form);
      message.success(`Successfully added branch ${form.branchName}`);
      dispatch(addBranch({ name: response.name, id: response.id }));
    } catch (error) {
      console.log(error);
      messageApi.error(`Failed to add branch ${form.branchName}`);
    }
    form.resetFields();
    setIsShowModal(false);
  };
  const onFinishFailed = (values) => {
    console.log("Failed:", values);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsShowModal(false);
  };
  return (
    <div className="mb-2">
      {contextHolder}
      <Button onClick={showModal}>Add new major</Button>
      <Modal
        cancelText="Cancel"
        okText="Add"
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        open={isShowModal}
        title="Add new major"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Major name"
            name="branchName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalAddMajor;
