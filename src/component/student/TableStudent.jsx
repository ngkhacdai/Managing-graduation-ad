import { Button, Pagination, Popover, Table } from "antd";
import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";
import ModalDeleteStudent from "./ModalDeleteStudent";
import ModalUpdateStudent from "./ModalUpdateStudent";

const TableStudent = ({ studentData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [studentDelete, setStudentDelete] = useState([]);
  const [studentUpdate, setStudentUpdate] = useState([]);
  const showModalDelelte = (record) => {
    setStudentDelete(record);
    setIsModalDeleteOpen(true);
  };
  const closeModalDelete = () => {
    setStudentDelete([]);
    setIsModalDeleteOpen(false);
  };
  const showModalUpdate = (record) => {
    setStudentUpdate(record);
    setIsModalUpdateOpen(true);
  };
  const closeModalUpdate = () => {
    setStudentUpdate([]);
    setIsModalUpdateOpen(false);
  };
  const columns = [
    {
      title: "No",
      key: "no",
      render: (_, record, index) => {
        return <p>{(currentPage - 1) * 10 + index + 1}</p>;
      },
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "studentName",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (record, text, index) => {
        return (
          <>
            <Popover content={<p>Edit Sutdent</p>}>
              <Button
                type="primary"
                onClick={() => showModalUpdate(record)}
                className="mx-2 bg-yellow-500 hover:bg-yellow-400"
              >
                <FaUserEdit />
              </Button>
            </Popover>
            <Popover content={<p>Delete Sutdent</p>}>
              <Button
                type="primary"
                onClick={() => showModalDelelte(record)}
                className="mx-2 bg-red-500 hover:bg-red-400"
              >
                <TiUserDelete />
              </Button>
            </Popover>
          </>
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
        dataSource={studentData}
        rowKey={"id"}
        columns={columns}
        pagination={false}
        scroll={{ x: 600 }}
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
        <ModalDeleteStudent
          student={studentDelete}
          closeModal={() => closeModalDelete()}
        />
      )}
      {isModalUpdateOpen && (
        <ModalUpdateStudent
          student={studentUpdate}
          closeModal={() => closeModalUpdate()}
        />
      )}
    </div>
  );
};

export default TableStudent;
