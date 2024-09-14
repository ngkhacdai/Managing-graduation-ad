import { Button, DatePicker, Form, Input, Modal, Tooltip } from "antd";
import useMessage from "antd/es/message/useMessage";
import moment from "moment";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { fetchUpdateSession } from "../../redux/slice/SessionSlice";
import dayjs from "dayjs";

const ModalUpdate = ({ item }) => {
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
      courseYear: values.courseYear.year(),
      limitTime: values.limitTime.toISOString(),
    };

    // Dispatching action with serializable data
    dispatch(fetchUpdateSession({ sessionData: formData, id: item.id }));
    message.success("Updated successfully");

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
      <Tooltip title="Update">
        <Button
          onClick={() => setIsShowModal(true)}
          type="primary"
          className="bg-yellow-500 hover:bg-yellow-400"
        >
          <MdEdit />
        </Button>
      </Tooltip>
      <Modal
        onCancel={() => setIsShowModal(false)}
        onOk={onOk}
        open={isShowModal}
        title="Update session"
      >
        <Form
          layout="vertical"
          initialValues={{
            session: item.session,
            courseYear: dayjs().year(item.courseYear),
            limitTime: dayjs(item.limitTime),
          }}
          onFinish={onFinish}
          form={form}
        >
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

export default ModalUpdate;
