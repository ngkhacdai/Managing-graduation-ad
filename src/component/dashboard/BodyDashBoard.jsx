import React from "react";
import PieChartProject from "./PieChartProject";
import ModalFilter from "./ModalFilter";
import ChartStudent from "./ChartStudent";
// import { useSelector } from "react-redux";

const BodyDashBoard = () => {
  //   const detail = useSelector((state) => state.dashBoard.detail);

  return (
    <>
      <div className="flex p-2 justify-between border-t-2 border-solid">
        <div className="w-3/4 border-r-2 border-solid">
          <p className="text-lg text-center">Student chart</p>
          <ModalFilter />
          <ChartStudent />
        </div>
        <div className="text-center w-1/4">
          <p className="text-lg">Project chart</p>
          <PieChartProject />
        </div>
      </div>
    </>
  );
};

export default BodyDashBoard;
