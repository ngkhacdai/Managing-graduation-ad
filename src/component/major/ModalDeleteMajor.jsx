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
        title={<p>Are you want to delete {major.majorName}?</p>}
        open={isModalOpen}
        okText="Delete"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className="text-2xl text-red-500">
          To be carefully, this action can not be undo!
        </p>
      </Modal>
    </div>
  );
};

export default ModalDeleteMajor;
