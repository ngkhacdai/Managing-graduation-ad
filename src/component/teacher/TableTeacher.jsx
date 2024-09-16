import {
  Button,
  message,
  Pagination,
  Popover,
  Spin,
  Table,
  Tooltip,
} from "antd";
import React, { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import ModalUpdateTeacher from "./ModalUpdateTeacher";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeacher } from "../../redux/slice/TeacherSlice";
import ModalDetail from "./ModalDetail";

const TableTeacher = () => {
  const [messageAPI, contexHolder] = message.useMessage();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [teacherUpdate, setTeacherUpdate] = useState([]);
  const teacherData = useSelector((state) => state.teacher.teacherData);
  const loading = useSelector((state) => state.teacher.loading);
  const dispatch = useDispatch();
  console.log("Teacher Data", teacherData);

  useEffect(() => {
    dispatch(getAllTeacher());
  }, []);
  const paginationChange = (page) => {
    setCurrentPage(page);
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
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Mentee limit",
      dataIndex: "limitOfMentees",
      key: "menteeLimit",
    },
    {
      title: "Actions",
      key: "actions",
      render: (record, text, index) => {
        return (
          <div className="flex items-center">
            <ModalDetail profile={record} />
            <Tooltip title={<p>Update teacher</p>}>
              <Button
                type="primary"
                onClick={() => showModalUpdate(record)}
                className="m-2 bg-yellow-500 hover:bg-yellow-400"
              >
                <FaUserEdit />
              </Button>
            </Tooltip>
          </div>
        );
      },
    },
  ];
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
  if (loading) {
    return <Spin fullscreen />;
  }
  return (
    <div>
      {contexHolder}
      <Table
        columns={columns}
        rowKey="accountId"
        dataSource={teacherData}
        scroll={{ x: 800 }}
        pagination={{
          onChange: (page) => {
            paginationChange(page);
          },
        }}
      />
      {isModalUpdateOpen && (
        <ModalUpdateTeacher
          teacher={teacherUpdate}
          closeModal={() => closeModalUpdate()}
          alertMessage={alertMessage}
        />
      )}
    </div>
  );
};

export default TableTeacher;
