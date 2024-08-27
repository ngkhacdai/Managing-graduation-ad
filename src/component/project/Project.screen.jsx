import { Button, Pagination, Table } from "antd";
import React, { useEffect, useState } from "react";

import HeaderProject from "./HeaderProject";
import ModalDetail from "./ModalDetail";
import { getProjectNotDone } from "../../api/project";

const ProjectScreen = () => {
  const [projectData, setProjectData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailProject, setDetailProject] = useState([]);

  const getProjectData = async () => {
    const response = await getProjectNotDone();
    setProjectData(response);
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
      title: "Status",
      key: "status",
      render: (record) => {
        return <p>{record.completed ? "Finished" : "Processing"}</p>;
      },
    },
    {
      title: "Start date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End date",
      key: "endDate",
      render: (record) => {
        return <p>{record.endDate ? record.endDate : "Not finish"}</p>;
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

  const showDetail = (item) => {
    setDetailProject(item);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setDetailProject([]);
    setIsModalOpen(false);
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

export default ProjectScreen;
