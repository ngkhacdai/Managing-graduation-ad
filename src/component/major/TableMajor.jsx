import React, { useEffect, useState } from "react";
import { Button, Spin, message, Table } from "antd";
import ModalDeleteMajor from "./ModalDeleteMajor";
import ModalUpdateMajor from "./ModalUpdateMajor";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataBranch } from "../../redux/slice/BranchSlice";

const TableMajor = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [currentPage, setCurrentPage] = useState(1);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [majorDelete, setMajorDelete] = useState(null);
  const [majorUpdate, setMajorUpdate] = useState(null);
  const dispatch = useDispatch();
  const listMajor = useSelector((state) => state.branch.data);
  const loading = useSelector((state) => state.branch.loading);

  useEffect(() => {
    dispatch(fetchDataBranch());
  }, [dispatch]);

  const showModalDelete = (record) => {
    setMajorDelete(record);
    setIsModalDeleteOpen(true);
  };

  const closeModalDelete = () => {
    setMajorDelete(null);
    setIsModalDeleteOpen(false);
  };

  const showModalUpdate = (record) => {
    setMajorUpdate(record);
    setIsModalUpdateOpen(true);
  };

  const closeModalUpdate = () => {
    setMajorUpdate(null);
    setIsModalUpdateOpen(false);
  };

  const alertMessage = (message, type) => {
    switch (type) {
      case "error":
        messageApi.error(message);
        break;
      case "success":
        messageApi.success(message);
        break;
      default:
        break;
    }
  };

  const columns = [
    {
      title: "No",
      key: "no",
      render: (text, record, index) => (
        <p>{(currentPage - 1) * 10 + index + 1}</p>
      ),
    },
    {
      title: "Major name",
      key: "branchName",
      render: (record) => <p>{record?.name}</p>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <div>
          <Button
            type="primary"
            onClick={() => showModalUpdate(record)}
            className="bg-yellow-400 hover:bg-yellow-300 mr-2"
          >
            Update
          </Button>
          <Button
            type="primary"
            onClick={() => showModalDelete(record)}
            className="bg-red-500 hover:bg-red-400"
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <div>
      {contextHolder}
      <Table
        columns={columns}
        rowKey="id"
        dataSource={listMajor}
        scroll={{ x: 600 }}
        pagination={{
          onChange: (page) => {
            setCurrentPage(page);
          },
        }}
      />
      {isModalDeleteOpen && (
        <ModalDeleteMajor
          major={majorDelete}
          closeModal={closeModalDelete}
          alertMessage={alertMessage}
        />
      )}
      {isModalUpdateOpen && (
        <ModalUpdateMajor
          major={majorUpdate}
          closeModal={closeModalUpdate}
          alertMessage={alertMessage}
        />
      )}
    </div>
  );
};

export default TableMajor;
