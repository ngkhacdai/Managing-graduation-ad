import { Form, Input, message, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { updateBranch } from "../../api/branch";
import { updateBranchAction } from "../../redux/slice/BranchSlice";
import { useDispatch } from "react-redux";
const ModalUpdateMajor = ({ major, closeModal, alertMessage }) => {
  const dispatch = useDispatch();
  console.log(major);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  const handleOk = async () => {
    form.submit();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  const onFinish = async () => {
    const formData = {
      branchName: form.getFieldValue().majorName,
    };
    try {
      const response = await updateBranch(formData, major.id);
      alertMessage("Update Branch Success", "success");
      // messageApi.success("Update Branch Success");
      await dispatch(updateBranchAction(response));
      setIsModalOpen(false);
      setTimeout(() => {
        closeModal();
      }, 500);
    } catch (error) {
      console.log(error);
      alertMessage("Update Branch Success", "error");
    }
  };
  const onFinishFailed = (values) => {
    messageApi.error("Input is null");
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
            majorName: major.name,
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
