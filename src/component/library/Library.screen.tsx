import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import HeaderProject from "./HeaderProject";
import ModalDetail from "./ModalDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchProject } from "../../redux/slice/Library.slice";

const LibraryScreen = () => {
  const dispatch = useDispatch<any>();
  const projectData = useSelector((state: any) => state.library.project);
  const [currentPage, setCurrentPage] = useState(1);
  const getProjectData = async () => {
    dispatch(fetchProject());
  };

  useEffect(() => {
    getProjectData();
  }, []);

  const columns = [
    {
      title: "No",
      key: "no",
      render: (_, record, index) => {
        return <p>{(currentPage - 1) * 10 + index + 1}</p>;
      },
    },
    {
      title: "Project Name",
      key: "projectName",
      render: (record) => {
        return <p className="line-clamp-1 max-w-96">{record.projectName}</p>;
      },
    },
    {
      title: "Student name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Mentor",
      dataIndex: "mentor",
      key: "mentor",
    },
    {
      title: "Start date",
      dataIndex: "startTime",
      key: "startDate",
    },
    {
      title: "End date",
      dataIndex: "endTime",
      key: "endDate",
    },
    {
      title: "Point",
      dataIndex: "point",
      key: "point",
    },
    {
      title: "Public",
      key: "public",
      render: (record) => {
        return <p>{record.public ? "Public" : "Private"}</p>;
      },
    },
    {
      title: "Detail",
      key: "detail",
      render: (record) => {
        return <ModalDetail />;
      },
    },
  ];

  const paginationChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <HeaderProject />
      <Table
        scroll={{ x: 600 }}
        columns={columns}
        rowKey="id"
        dataSource={projectData}
        pagination={{
          defaultCurrent: currentPage,
          onChange: paginationChange,
          showSizeChanger: false,
          responsive: true,
        }}
      />
    </div>
  );
};

export default LibraryScreen;
