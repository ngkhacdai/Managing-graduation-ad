import React from "react";
import CardDashBoard from "./CardDashBoard";
import { Col, Row } from "antd";

const HeaderDashBoard = ({ totalTeacher, totalStudent, totalProject }) => {
  return (
    <div className="text-center">
      <Row gutter={[10, 10]}>
        <Col sm={12} xs={24} md={8}>
          <CardDashBoard title={"Student"} totalTitle={totalStudent} />
        </Col>
        <Col sm={12} xs={24} md={8}>
          <CardDashBoard title={"Teacher"} totalTitle={totalTeacher} />
        </Col>
        <Col sm={12} xs={24} md={8}>
          <CardDashBoard title={"Project"} totalTitle={totalProject} />
        </Col>
      </Row>
    </div>
  );
};

export default HeaderDashBoard;
