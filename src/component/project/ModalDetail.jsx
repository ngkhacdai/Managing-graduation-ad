import { Button, Checkbox, Form, Input, Modal, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";

const ModalDetail = ({ detailProject, closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  const handleOk = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      closeModal();
    }, 300);
  };
  const handleCancel = () => {
    setIsModalOpen(false);

    setTimeout(() => {
      closeModal();
    }, 300);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Modal
        title="Project Information Detail"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            projectName: detailProject.project,
            studentID: detailProject.student,
            teacherID: detailProject.teacher,
            major: detailProject.major,
            point: detailProject.point,
            file: detailProject.file,
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
            <Input disabled className="text-black" />
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
            <Input disabled className="text-black" />
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
            <Input disabled className="text-black" />
          </Form.Item>
          <Form.Item label="Major" name="major">
            <Select
              disabled
              className="w-full text-center text-black"
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
              {
                type: "number",
                min: 1,
                max: 10,
                message: "Point must be between 1 and 10!",
                transform(value) {
                  return Number(value);
                },
              },
            ]}
          >
            <Input
              disabled={detailProject.status !== "Reviewing"}
              className="text-black"
              type="number"
            />
          </Form.Item>
          <Form.Item label="" name="public">
            <Checkbox
              disabled={detailProject.status === "Processing" ? true : false}
            >
              Public
            </Checkbox>
          </Form.Item>
          <Form.Item name="file" label="Document">
            <Input disabled className="text-black" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalDetail;
