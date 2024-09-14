import React, { useEffect, useState } from "react";
import HeaderDashBoard from "./HeaderDashBoard";
import BodyDashBoard from "./BodyDashBoard";
import { Spin } from "antd";
import { getDataHome } from "../../api/home";

const DashboardScreen = () => {
  const [data, setData] = useState();
  const getData = async () => {
    setData(await getDataHome());
  };
  useEffect(() => {
    getData();
  }, []);
  if (!data) {
    return <Spin fullscreen />;
  }
  return (
    <div>
      <HeaderDashBoard
        totalProject={data.totalProject}
        totalStudent={data.totalStudent}
        totalTeacher={data.totalTeacher}
      />
      <br />
      <BodyDashBoard
        dataForDashBoardByYearViews={data.dataForDashBoardByYearViews}
        dataForDashBoardViews={data.dataForDashBoardViews}
      />
    </div>
  );
};

export default DashboardScreen;
