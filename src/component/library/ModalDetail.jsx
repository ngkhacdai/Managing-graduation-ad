import { Button, Checkbox, Col, Form, Input, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import { detailProjectFinish } from "../../api/project";

const ModalDetail = ({ projectId, isPublic }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatePoint, setUpdatePoint] = useState(true);
  const [projectDetail, setProjectDetail] = useState();

  const getData = async () => {
    const response = await detailProjectFinish(projectId);
    setProjectDetail(response);
  };
  useEffect(() => {
    if (isModalOpen) {
      getData();
    }
  }, [projectId, isModalOpen]);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const changeUrlToSearchParams = (url) => {
    const encodedUrl = encodeURIComponent(url);
    return `/view?file=${encodedUrl.replace(/\//g, "_")}`;
  };
  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)} type="primary">
        Detail
      </Button>
      {projectDetail && (
        <Modal
          title="Project Information Detail"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={<Button type="primary">Save</Button>}
        >
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
              <Col span={15}>Branch: {projectDetail?.studentBranch}</Col>
            </Row>
          </div>
          <p className="text-lg font-semibold">Mentor information</p>
          <hr />
          <div>
            <Row className="flex mt-2">
              <Col span={9}>Degree: {projectDetail?.mentorDegree}</Col>
              <Col span={15}>Mentor Name: {projectDetail?.mentorName}</Col>
            </Row>
            <Row className="flex mt-2">
              <Col span={9}>Phone: {projectDetail?.mentorPhone}</Col>
              <Col span={15}>Branch: {projectDetail?.mentorBranch}</Col>
            </Row>
          </div>
          <div>
            <p className="text-lg font-semibold">Project description</p>
            <hr />
            <p>{projectDetail?.projectDescription}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">File upload</p>
            <hr />
            <a
              target="_blank"
              href={changeUrlToSearchParams(projectDetail?.fileFinal)}
            >
              {projectDetail?.fileName}
            </a>
          </div>
          <Form
            className="mt-2"
            name="basic"
            layout="vertical"
            initialValues={{
              point: projectDetail?.mark,
              public: isPublic ? ["public"] : [],
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="flex items-center">
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
                <Input
                  className="text-black"
                  type="number"
                  disabled={updatePoint}
                />
              </Form.Item>
              <Button
                className="mx-2"
                type="primary"
                onClick={() => setUpdatePoint(!updatePoint)}
              >
                Update point
              </Button>
            </div>
            <Form.Item label="" name="public">
              <Checkbox.Group>
                <Checkbox value="public">Public</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default ModalDetail;
