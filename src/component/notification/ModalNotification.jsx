import { Form, Modal, Tooltip } from "antd";
import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import FormNotification from "./FormNotification";

const ModalNotification = () => {
  const [isShow, setIsShow] = useState(false);
  const [form] = Form.useForm();
  const onCancel = () => {
    form.resetFields();
    setIsShow(false);
  };
  const onOpen = () => {
    setIsShow(true);
  };
  const onOk = async () => {
    form.submit();
  };
  return (
    <div>
      <Tooltip title="Create notification">
        <IoIosNotifications
          onClick={onOpen}
          size={20}
          className="cursor-pointer "
        />
      </Tooltip>
      <Modal
        onOk={onOk}
        open={isShow}
        title="Create Notification"
        onCancel={onCancel}
      >
        <FormNotification onCancel={onCancel} form={form} />
      </Modal>
    </div>
  );
};

export default ModalNotification;
