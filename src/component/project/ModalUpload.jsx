import { DatePicker, Modal, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { FaUpload } from "react-icons/fa";

const ModalUpload = ({ closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);

    setTimeout(() => {
      closeModal();
    }, 300);
  };
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Modal
        title="Upload project"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
            label="Project name"
            name="projectName"
            rules={[
              {
                required: true,
                message: "Please input Project name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Student ID"
            name="studentID"
            rules={[
              {
                required: true,
                message: "Please input student ID!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Teacher ID"
            name="teacherID"
            rules={[
              {
                required: true,
                message: "Please input teacher ID!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Major" name="major">
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
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Point"
            name="point"
            rules={[
              {
                required: true,
                message: "Please input point!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Presentation Day"
            name="presentationDay"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item
            name="file"
            label="Document"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              beforeUpload={() => {
                return false;
              }}
              name="logo"
              listType="picture"
            >
              <Button disabled icon={<FaUpload />}>
                Click to upload
              </Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalUpload;
