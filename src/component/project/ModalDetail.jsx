import { Button, Col, Form, Input, Modal, Row } from "antd";
import useMessage from "antd/es/message/useMessage";
import React, { useState } from "react";

const ModalDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageAPi, contextHolder] = useMessage();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    if (Number(values.point) < 0 || Number(values.point) > 10) {
      messageAPi.error("Point should be between 0 and 10.");
      return;
    }
  };
  const changeUrlToSearchParams = (url) => {
    const encodedUrl = encodeURIComponent(url);
    return `/view/${encodedUrl.replace(/\//g, "_")}`;
  };
  return (
    <div>
      {contextHolder}
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Detail
      </Button>
      <Modal
        title="Project Information Detail"
        open={isModalOpen}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
      >
        <div>
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
              <Col span={9}>Degree: ABC</Col>
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
            <a href={changeUrlToSearchParams()} target="_blank">
              gasdga.pdf
            </a>
          </div>
          <div className="mt-2">
            <Form onFinish={onFinish}>
              <Form.Item
                label="Point"
                rules={[
                  {
                    required: true,
                    message: "Please input Point!",
                  },
                ]}
                name="point"
              >
                <div className="flex">
                  <Input type="number" />
                  <Button htmlType="submit" type="primary" className="mx-2">
                    Save
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDetail;
