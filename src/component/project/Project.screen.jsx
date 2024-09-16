import { Button, Pagination, Table } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";

import HeaderProject from "./HeaderProject";
import ModalDetail from "./ModalDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchProject } from "../../redux/slice/ProjectSlice";

const ProjectScreen = () => {
  const dispatch = useDispatch();
  const projectData = useSelector((state) => state.project.project);
  const [currentPage, setCurrentPage] = useState(1);

  const debounceGetProjectData = useCallback(
    debounce(() => dispatch(fetchProject()), 300),
    [dispatch]
  );

  useEffect(() => {
    debounceGetProjectData();

    return () => {
      debounceGetProjectData.cancel();
    };
  }, [debounceGetProjectData]);

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
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <>
            <ModalDetail completed={record.completed} projectId={record.id} />
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
      <HeaderProject />
      <Table
        scroll={{ x: 900 }}
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
