import { Button, Pagination, Popover, Table } from "antd";
import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";
import ModalUpdateTeacher from "./ModalUpdateTeacher";
import ModalDeleteTeacher from "./ModalDeleteTeacher";

const TableTeacher = ({ teacherData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [teachertDelete, setTeacherDelete] = useState([]);
  const [teacherUpdate, setTeacherUpdate] = useState([]);
  const paginationChange = (page) => {
    setCurrentPage(page);
  };
  const showModalDelelte = (record) => {
    setTeacherDelete(record);
    setIsModalDeleteOpen(true);
  };
  const closeModalDelete = () => {
    setTeacherDelete([]);
    setIsModalDeleteOpen(false);
  };
  const showModalUpdate = (record) => {
    setTeacherUpdate(record);
    setIsModalUpdateOpen(true);
  };
  const closeModalUpdate = () => {
    setTeacherUpdate([]);
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
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "teacherName",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Work place",
      key: "workPlace",
      dataIndex: "workPlace",
    },
    {
      title: "Degree",
      key: "degree",
      dataIndex: "degree",
    },
    {
      title: "Academic Rank",
      key: "academicRank",
      dataIndex: "academicRank",
    },
    {
      title: "Action",
      key: "action",
      render: (record, text, index) => {
        return (
          <div>
            <Popover content={<p>Update teacher</p>}>
              <Button
                type="primary"
                onClick={() => showModalUpdate(record)}
                className="m-2 bg-yellow-500 hover:bg-yellow-400"
              >
                <FaUserEdit />
              </Button>
            </Popover>
            <Popover content={<p>Delete teacher</p>}>
              <Button
                type="primary"
                onClick={() => showModalDelelte(record)}
                className="m-2 bg-red-500 hover:bg-red-400"
              >
                <TiUserDelete />
              </Button>
            </Popover>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Table
        rowKey={"id"}
        scroll={{ x: 800 }}
        dataSource={teacherData}
        columns={columns}
        pagination={false}
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
      {isModalUpdateOpen && (
        <ModalUpdateTeacher
          teacher={teacherUpdate}
          closeModal={() => closeModalUpdate()}
        />
      )}
      {isModalDeleteOpen && (
        <ModalDeleteTeacher
          teacher={teachertDelete}
          closeModal={() => closeModalDelete()}
        />
      )}
    </div>
  );
};

export default TableTeacher;
