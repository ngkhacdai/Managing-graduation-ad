import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Button, DatePicker, Form, Input, Modal } from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  fetchCreateSession,
  fetchSessionData,
} from "../../redux/slice/SessionSlice";
import useMessage from "antd/es/message/useMessage";
import dayjs from "dayjs";

const ModalAddSession = () => {
  const [message, contextHoler] = useMessage();
  const [isShowModal, setIsShowModal] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onOk = () => {
    form.submit();
  };
  const disablePastDates = (current) => {
    // Disable dates that are before today
    return current && current < moment().startOf("day");
  };
  const onFinish = (values) => {
    const formData = {
      session: values.session,
      courseYear: new Date(values.courseYear).getFullYear(),
      limitTime: values.limitTime,
    };
    dispatch(fetchCreateSession(formData));
    message.success("Create successfully");
    setTimeout(() => {
      setIsShowModal(false);
    }, 500);
  };
  const disablePastYears = (current) => {
    // Disable dates before the start of the current year
    return current && current.year() < dayjs().year();
  };
  return (
    <div>
      {contextHoler}
      <Button onClick={() => setIsShowModal(true)} type="primary">
        <FaPlus />
        <p>Add Session</p>
      </Button>
      <Modal
        onCancel={() => setIsShowModal(false)}
        onOk={onOk}
        open={isShowModal}
        title="Add session"
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input session!",
              },
            ]}
            name={"session"}
            label="Session"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input course year!",
              },
            ]}
            name={"courseYear"}
            label="Course Year"
          >
            <DatePicker
              disabledDate={disablePastYears}
              className="w-full"
              picker="year"
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input limit time!",
              },
            ]}
            name={"limitTime"}
            label="Limit Time"
          >
            <DatePicker disabledDate={disablePastDates} className="w-full" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalAddSession;
