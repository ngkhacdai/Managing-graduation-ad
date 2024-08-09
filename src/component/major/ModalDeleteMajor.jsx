import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBranch } from "../../api/branch";
import { deleteBranchAction } from "../../redux/slice/BranchSlice";

const ModalDeleteMajor = ({ major, closeModal, alertMessage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  const handleOk = async () => {
    try {
      await deleteBranch(major.id);
      dispatch(deleteBranchAction({ id: major.id }));
      alertMessage("Delete major successfully", "success");
      setIsModalOpen(false);
      setTimeout(() => {
        closeModal();
      }, 300);
    } catch (error) {
      console.log(error);
      messageAPI.error("Delete major failed");
    }
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
