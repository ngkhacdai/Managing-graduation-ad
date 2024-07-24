import { Button, Pagination, Table } from "antd";
import React, { useEffect, useState } from "react";

import HeaderProject from "./HeaderProject";
import ModalDetail from "./ModalDetail";

const ProjectScreen = () => {
  const [projectData, setProjectData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailProject, setDetailProject] = useState([]);
  const fakeStatus = () => {
    return ["Private", "Public", "Processing", "Reviewing"][
      Math.floor(Math.random() * 4)
    ];
  };

  const fakeMajor = () => {
    return ["Computer Science", "Mathematics", "Physics"][
      Math.floor(Math.random() * 3)
    ];
  };

  const generatePoint = (status) => {
    if (status !== "Processing") {
      return Math.floor(Math.random() * 10 + 1); // Generates a random point between 0 and 100
    }
    return null; // No points for 'Processing' status
  };

  const fakeProjectData = Array.from({ length: 10 }, (_, index) => {
    const status = fakeStatus();
    return {
      id: index,
      project: `Project name ${index}`,
      student: `Student ${index}`,
      teacher: `Teacher ${Math.floor(Math.random() * 10) + 1}`,
      status: status,
      major: fakeMajor(),
      point: generatePoint(status),
      file: `file${index}.docx`,
    };
  });

  useEffect(() => {
    setProjectData(fakeProjectData);
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
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Project Name",
      key: "project",
      render: (record) => {
        return <p className="line-clamp-1 max-w-96">{record.project}</p>;
      },
    },
    {
      title: "Student",
      dataIndex: "student",
      key: "student",
    },
    {
      title: "Teacher",
      dataIndex: "teacher",
      key: "teacher",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Detail",
      key: "detail",
      render: (record) => {
        return (
          <Button onClick={() => showDetail(record)} type="primary">
            Detail
          </Button>
        );
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
        pagination={false}
      />
      <div className="flex mt-2 justify-end items-end">
        <Pagination
          total={500}
          defaultCurrent={currentPage}
          onChange={paginationChange}
          showSizeChanger={false}
          responsive={true}
        />
      </div>
      {isModalOpen && (
        <ModalDetail
          detailProject={detailProject}
          closeModal={() => closeModal()}
        />
      )}
    </div>
  );
};

export default ProjectScreen;
