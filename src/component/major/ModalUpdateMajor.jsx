import { Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";

const ModalUpdateMajor = ({ major, closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setIsShowModal(false);
  };
  const onFinishFailed = (values) => {
    console.log("Failed:", values);
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
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            majorName: major.majorName,
          }}
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

export default ModalUpdateMajor;
