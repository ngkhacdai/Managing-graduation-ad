import { Modal } from "antd";
import React, { useEffect, useState } from "react";

const ModalDeleteStudent = ({ student, closeModal }) => {
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
      <div>
        <Modal
          title={
            <p>Are you want to delete this student: {student.studentName}?</p>
          }
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
    </div>
  );
};

export default ModalDeleteStudent;
