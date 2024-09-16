import { Button, Checkbox, Col, Form, Input, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import { detailProjectFinish } from "../../api/project";
import { useDispatch } from "react-redux";
import useMessage from "antd/es/message/useMessage";
import { updateStatusProject } from "../../redux/slice/Library.slice";

const ModalDetail = ({ projectId, isPublic }) => {
  const [message, contextHolder] = useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatePoint, setUpdatePoint] = useState(true);
  const [projectDetail, setProjectDetail] = useState();
  const [form] = Form.useForm();
  const getData = async () => {
    const response = await detailProjectFinish(projectId);
    setProjectDetail(response);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (isModalOpen) {
      getData();
    }
  }, [projectId, isModalOpen]);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    const formData = {
      projectId,
      newPoint: values.point,
      publicProject: values.public.length > 0 ? true : false,
    };
    dispatch(updateStatusProject(formData));
    message.success("Update project successfully");
    setTimeout(() => {
      handleCancel();
    }, 300);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const changeUrlToSearchParams = (url) => {
    const encodedUrl = encodeURIComponent(url);
    return `/view?file=${encodedUrl.replace(/\//g, "_")}`;
  };
  const handleOk = () => {
    form.submit();
  };
  return (
    <div>
      {contextHolder}
      <Button onClick={() => setIsModalOpen(true)} type="primary">
        View detail
      </Button>
      {projectDetail && (
        <Modal
          title="Project Information Detail"
          open={isModalOpen}
          onCancel={handleCancel}
          onOk={handleOk}
          className="lg:w-1/2 md:w-2/3 w-full"
          footer={
            <Button onClick={handleOk} type="primary">
              Save
            </Button>
          }
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
              <Col span={15}>Major: {projectDetail?.studentBranch}</Col>
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
            <Row className="mt-2">
              <Col span={9}>File upload:</Col>
              <Col span={15}>
                <a
                  target="_blank"
                  href={changeUrlToSearchParams(projectDetail?.fileFinal)}
                >
                  <p className=" line-clamp-1">{projectDetail?.fileName}</p>
                </a>
              </Col>
            </Row>
            <div className="mt-2">
              <p className="text-lg font-semibold">Project description:</p>
              <hr />
              <p className="whitespace-pre-wrap break-words mt-2">
                {projectDetail?.projectDescription}
              </p>
            </div>
          </div>

          <Form
            className="mt-2"
            name="basic"
            layout="vertical"
            form={form}
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
