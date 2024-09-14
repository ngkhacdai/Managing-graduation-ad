import { Button, Modal, Tooltip } from "antd";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchDeleteSession } from "../../redux/slice/SessionSlice";
import useMessage from "antd/es/message/useMessage";

const ModalDelete = ({ id }) => {
  const [message, contextHoler] = useMessage();
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();
  const onOk = () => {
    dispatch(fetchDeleteSession(id));
    message.success("Delete successfully");
    setTimeout(() => {
      setIsShowModal(false);
    }, 500);
  };
  return (
    <div>
      {contextHoler}
      <Tooltip title="Delete">
        <Button
          onClick={() => setIsShowModal(true)}
          type="primary"
          className="bg-red-500 hover:bg-red-400"
        >
          <FaTrashAlt />
        </Button>
      </Tooltip>
      <Modal
        onCancel={() => setIsShowModal(false)}
        onOk={onOk}
        open={isShowModal}
        title="Delete session"
      >
        <p>You can not go undo when do this action! Do you want to continue?</p>
      </Modal>
    </div>
  );
};

export default ModalDelete;
