import { Modal } from "antd";
import React, { useEffect, useState } from "react";

const ModalDeleteMajor = ({ major, closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      closeModal();
    }, 300);
  };
  return (
    <div>
      <Modal
        title="Delete major"
        open={isModalOpen}
        okText="Delete"
        centered
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you want to delete {major.majorName}?</p>
      </Modal>
    </div>
  );
};

export default ModalDeleteMajor;
