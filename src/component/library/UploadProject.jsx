import { Button } from "antd";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ModalUpload from "./ModalUpload";

const UploadProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        className="flex items-center justify-center"
      >
        <FaPlus />
        Upload Project
      </Button>
      {isModalOpen && <ModalUpload closeModal={() => closeModal()} />}
    </div>
  );
};

export default UploadProject;
