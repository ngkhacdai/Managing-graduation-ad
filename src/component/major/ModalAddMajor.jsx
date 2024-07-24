import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";

const ModalAddMajor = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsShowModal(true);
  };
  const handleOk = () => {
    form.submit();
  };
  const onFinish = (values) => {
    console.log("Success:", values);
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
            name="majorName"
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
