import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Upload,
} from "antd";
import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";

const ModalDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatePoint, setUpdatePoint] = useState(true);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)} type="primary">
        Detail
      </Button>
      <Modal
        title="Project Information Detail"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={<Button type="primary">Save</Button>}
      >
        <p className="text-center my-2 font-bold text-xl">Project Name</p>
        <p className="text-lg font-semibold">Student information</p>
        <hr />
        <div>
          <Row className="flex mt-2">
            <Col span={9}>Student Code: ABC</Col>
            <Col span={15}>Student Name: ABC</Col>
          </Row>
          <Row className="flex mt-2">
            <Col span={9}>Phone: ABC</Col>
            <Col span={15}>Branch: ABC</Col>
          </Row>
        </div>
        <p className="text-lg font-semibold">Mentor information</p>
        <hr />
        <div>
          <Row className="flex mt-2">
            <Col span={9}>Degree Code: ABC</Col>
            <Col span={15}>Mentor Name: ABC</Col>
          </Row>
          <Row className="flex mt-2">
            <Col span={9}>Phone: ABC</Col>
            <Col span={15}>Branch: ABC</Col>
          </Row>
        </div>
        <div>
          <p className="text-lg font-semibold">Project description</p>
          <hr />
          <p>faskdjhfajksdf</p>
        </div>
        <div>
          <p className="text-lg font-semibold">File upload</p>
          <hr />
          <a target="_blank">gasdga.pdf</a>
        </div>
        <Form
          className="mt-2"
          name="basic"
          layout="vertical"
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
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
            <div className="flex">
              <Input
                className="text-black"
                type="number"
                disabled={updatePoint}
              />
              <Button
                className="mx-2"
                type="primary"
                onClick={() => setUpdatePoint(!updatePoint)}
              >
                Update point
              </Button>
            </div>
          </Form.Item>
          <Form.Item label="" name="public">
            <Checkbox>Public</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalDetail;
