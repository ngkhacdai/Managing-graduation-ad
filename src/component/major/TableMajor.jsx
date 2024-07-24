import React, { useState } from "react";
import { Button, Pagination, Table } from "antd";
import ModalDeleteMajor from "./ModalDeleteMajor";
import ModalUpdateMajor from "./ModalUpdateMajor";

const TableMajor = ({ majorData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [majorDelete, setMajorDelete] = useState([]);
  const [majorUpdate, setMajorUpdatee] = useState([]);

  const showModalDelelte = (record) => {
    setMajorDelete(record);
    setIsModalDeleteOpen(true);
  };
  const closeModalDelete = () => {
    setMajorDelete([]);
    setIsModalDeleteOpen(false);
  };
  const showModalUpdate = (record) => {
    setMajorUpdatee(record);
    setIsModalUpdateOpen(true);
  };
  const closeModalUpdate = () => {
    setMajorUpdatee([]);
    setIsModalUpdateOpen(false);
  };
  const columns = [
    {
      title: "No",
      key: "no",
      render: (record, text, index) => {
        return <p>{(currentPage - 1) * 10 + index + 1}</p>;
      },
    },
    {
      title: "Major name",
      key: "majorName",
      render: (record, text, index) => {
        return <p>{record.majorName}</p>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (record, text, index) => {
        return (
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
              onClick={() => showModalDelelte(record)}
              className="bg-red-500 hover:bg-red-400"
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  const paginationChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Table
        columns={columns}
        rowKey="id"
        pagination={false}
        dataSource={majorData}
      />
      <div className="flex justify-end mt-2 items-end">
        <Pagination
          total={500}
          defaultCurrent={currentPage}
          onChange={paginationChange}
          showSizeChanger={false}
          responsive={true}
        />
      </div>
      {isModalDeleteOpen && (
        <ModalDeleteMajor
          major={majorDelete}
          closeModal={() => closeModalDelete()}
        />
      )}
      {isModalUpdateOpen && (
        <ModalUpdateMajor
          major={majorUpdate}
          closeModal={() => closeModalUpdate()}
        />
      )}
    </div>
  );
};

export default TableMajor;
