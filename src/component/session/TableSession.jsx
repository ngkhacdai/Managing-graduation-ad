import { Button, Table, Tooltip } from "antd";
import React, { useState } from "react";
import { BiDetail } from "react-icons/bi";
import { useSelector } from "react-redux";
import Header from "./Header";
import ModalDelete from "./ModalDelete";
import ModalUpdate from "./ModalUpdate";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const TableSession = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const sessionData = useSelector((state) => state.session.sessionData);
  const columns = [
    {
      title: "No",
      key: "no",
      render: (record, text, index) => {
        return index + 1 + page * 10;
      },
    },
    {
      title: "Session",
      key: "session",
      dataIndex: "session",
    },
    {
      title: "Limit Time",
      key: "limitTime",
      render: (record) => {
        return moment(record.limitTime).format(`YYYY-MM-DD`);
      },
    },
    {
      title: "Course Year",
      key: "courseYear",
      dataIndex: "courseYear",
    },
    {
      title: "Actions",
      key: "action",
      render: (record, text, index) => {
        return (
          <div className="flex items-center gap-2">
            <Tooltip title="View Detail">
              <Button
                onClick={() => {
                  navigate(`/home/session/detail/${record.id}`);
                }}
                type="primary"
              >
                <BiDetail />
              </Button>
            </Tooltip>
            <ModalUpdate item={record} />
            <ModalDelete id={record.id} />
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Header />
      <Table
        rowKey={"id"}
        scroll={{ x: 600 }}
        columns={columns}
        dataSource={sessionData}
      />
    </div>
  );
};

export default TableSession;
