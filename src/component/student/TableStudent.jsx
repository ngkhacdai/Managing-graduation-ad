import {
  Button,
  message,
  Pagination,
  Popover,
  Spin,
  Table,
  Tooltip,
} from "antd";
import React, { useState, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";
import ModalDeleteStudent from "./ModalDeleteStudent";
import ModalUpdateStudent from "./ModalUpdateStudent";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudent } from "../../redux/slice/StudentSlice";
import ModalDetailStudent from "./ModalDetailStudent";

const TableStudent = () => {
  const [messageAPI, contexHolder] = message.useMessage();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [studentDelete, setStudentDelete] = useState([]);
  const [studentUpdate, setStudentUpdate] = useState([]);
  const studentData = useSelector((state) => state.student.studentData);
  const loading = useSelector((state) => state.student.loading);
  const dispatch = useDispatch();
  console.log("Student data", studentData);

  useEffect(() => {
    dispatch(getAllStudent());
  }, []);
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
  const alertMessage = (message, type = "success") => {
    switch (type) {
      case "error":
        messageAPI.error(message);
        break;
      case "success":
        messageAPI.success(message);
        break;
      default:
        messageAPI.info(message);
        break;
    }
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
      title: "User Name",
      dataIndex: "userName",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "statusAccount",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (record, text, index) => {
        return (
          <div className="flex items-center">
            <ModalDetailStudent profile={record} />
            <Tooltip className="m-2" title={<p>Edit Sutdent</p>}>
              <Button
                type="primary"
                onClick={() => showModalUpdate(record)}
                className="mx-2 bg-yellow-500 hover:bg-yellow-400"
              >
                <FaUserEdit />
              </Button>
            </Tooltip>
          </div>
        );
      },
    },
  ];
  const paginationChange = (page) => {
    setCurrentPage(page);
  };
  if (loading) {
    return <Spin fullscreen />;
  }
  return (
    <div>
      {contexHolder}
      <Table
        columns={columns}
        rowKey="accountId"
        dataSource={studentData}
        scroll={{ x: 600 }}
        pagination={{
          onChange: (page) => {
            paginationChange(page);
          },
        }}
      />

      {isModalDeleteOpen && (
        <ModalDeleteStudent
          student={studentDelete}
          closeModal={() => closeModalDelete()}
          alertMessage={alertMessage}
        />
      )}
      {isModalUpdateOpen && (
        <ModalUpdateStudent
          student={studentUpdate}
          closeModal={() => closeModalUpdate()}
          alertMessage={alertMessage}
        />
      )}
    </div>
  );
};

export default TableStudent;
