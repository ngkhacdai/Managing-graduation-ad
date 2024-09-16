import { Button, Col, Form, Input, Modal, Row } from "antd";
import useMessage from "antd/es/message/useMessage";
import React, { useEffect, useState } from "react";
import { detailProject } from "../../api/project";

const ModalDetail = ({ projectId, completed }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageAPi, contextHolder] = useMessage();
  const [projectDetail, setProjectDetail] = useState();
  const getData = async () => {
    const response = await detailProject(projectId);
    setProjectDetail(response);
  };

  useEffect(() => {
    if (isModalOpen) {
      getData();
    }
  }, [projectId, isModalOpen]);
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
        View detail
      </Button>
      <Modal
        className="lg:w-1/2 md:w-2/3 w-full"
        title="Project Information Detail"
        open={isModalOpen}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
      >
        <div>
          <p className="text-center my-2 font-bold text-xl">
            {projectDetail?.projectName}
          </p>
          <p className="text-lg font-semibold">Student information</p>
          <hr />
          <div>
            <Row className="flex mt-2">
              <Col span={9}>Student Code: {projectDetail?.studentId}</Col>
              <Col span={15}>Student Name: {projectDetail?.studentName}</Col>
            </Row>
            <Row className="flex mt-2">
              <Col span={9}>Phone: {projectDetail?.studentPhone}</Col>
              <Col span={15}>Major: {projectDetail?.studentBranch}</Col>
            </Row>
          </div>
          <p className="text-lg font-semibold">Mentor information</p>
          <hr />
          <div>
            <Row className="flex mt-2">
              <Col span={9}>Degree: {projectDetail?.mentorId}</Col>
              <Col span={15}>Mentor Name: {projectDetail?.mentorName}</Col>
            </Row>
            <Row className="flex mt-2">
              <Col span={9}>Phone: {projectDetail?.mentorPhone}</Col>
              <Col span={15}>Major: {projectDetail?.mentorBranch}</Col>
            </Row>
          </div>
          <div>
            <p className="text-lg font-semibold">Project information</p>
            <hr />
            <Row className="flex mt-2">
              <Col span={9}>Session: {projectDetail?.session}</Col>
              <Col span={15}>Deadline: {projectDetail?.timeLimit}</Col>
            </Row>
            <div className="mt-2">
              <p className="text-lg font-semibold">Project description:</p>
              <hr />
              <p className="whitespace-pre-wrap break-words mt-2">
                {projectDetail?.projectDescription}
              </p>
            </div>
          </div>
          {completed && (
            <>
              <div>
                <p className="text-lg font-semibold">File upload</p>
                <hr />
                <a
                  href={changeUrlToSearchParams(projectDetail?.fileFinal)}
                  target="_blank"
                >
                  fileupload.pdf
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
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ModalDetail;
