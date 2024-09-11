import { Button, Table } from "antd";
import React, { useState } from "react";
import { BiDetail } from "react-icons/bi";

const TableSession = () => {
  const [page, setPage] = useState(1);
  const columns = [
    {
      title: "No",
      key: "no",
      render: (record, text, index) => {
        return index + page * 10;
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
      dataIndex: "limitTime",
    },
    {
      title: "Action",
      key: "action",
      render: (record, text, index) => {
        return (
          <div>
            <Button>
              <BiDetail />
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Table columns={columns} />
    </div>
  );
};

export default TableSession;
