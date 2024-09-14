import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import useMessage from "antd/es/message/useMessage";
import React from "react";
import { createNotification } from "../../api/notification";

const FormNotification = ({ form, onCancel }) => {
  const [message, contextHolder] = useMessage();

  const onFinish = async () => {
    try {
      const values = form.getFieldsValue();
      await createNotification(values);
      message.success("Created notification successfully");
      onCancel();
    } catch (error) {
      message.error("Error creating notification");
    }
  };
  return (
    <>
      {contextHolder}

      <Form onFinish={onFinish} form={form} layout="vertical">
        <Form.Item
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title!",
            },
          ]}
          name="title"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Content"
          rules={[
            {
              required: true,
              message: "Please input the content!",
            },
          ]}
          name="content"
        >
          <TextArea />
        </Form.Item>
      </Form>
    </>
  );
};

export default FormNotification;
