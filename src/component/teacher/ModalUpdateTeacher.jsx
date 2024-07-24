import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";

const ModalUpdateTeacher = ({ teacher, closeModal }) => {
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

  const clearForm = () => {
    form.resetFields();
  };
  const handleFinish = () => {
    console.log("Success:", form.getFieldsValue());
    clearForm();
    setIsModalOpen(false);
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
            teacherName: teacher.teacherName,
            teacherEmail: teacher.email,
            workPlace: teacher.workPlace,
            degree: teacher.degree,
            academicRank: teacher.academicRank,
          }}
          form={form}
          onFinish={handleFinish}
        >
          <Form.Item
            label="Teacher name"
            rules={[
              {
                required: true,
                message: "Please input teacher name!",
              },
            ]}
            name="teacherName"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Teacher email"
            name="teacherEmail"
            rules={[
              {
                required: true,
                message: "Please input email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Work place"
            name="workPlace"
            rules={[
              {
                required: true,
                message: "Please input work place!",
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
            label="Academic Rank"
            name="academicRank"
            rules={[
              {
                required: true,
                message: "Please input academic rank!",
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

export default ModalUpdateTeacher;
