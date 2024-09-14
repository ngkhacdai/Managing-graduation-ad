import { Button, Col, Modal, Row, Tooltip } from "antd";
import React, { useState } from "react";
import { BiSolidUserDetail } from "react-icons/bi";

const ModalDetailStudent = ({ profile }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <Tooltip title="Detail">
        <Button onClick={() => setIsShow(true)} type="primary">
          <BiSolidUserDetail />
        </Button>
      </Tooltip>
      <Modal
        open={isShow}
        onCancel={() => setIsShow(false)}
        title="Teacher profile"
      >
        <div>
          <div className="text-center mb-2">
            <img
              alt=""
              src={profile.avatar}
              className="mx-auto mb-2 w-16 h-16 rounded-full"
            />
            <p className="text-lg font-semibold">{profile.fullName}</p>
          </div>
          <div>
            <Row className="my-1">
              <Col span={8}>Email: </Col>
              <Col span={16}>{profile.email}</Col>
            </Row>
            <Row className="my-1">
              <Col span={8}>Personal Email: </Col>
              <Col span={16}>{profile.personalEmail}</Col>
            </Row>
            <Row className="my-1">
              <Col span={8}>Branch: </Col>
              <Col span={16}>{profile.branch}</Col>
            </Row>
            <Row className="my-1">
              <Col span={8}>Phone Number: </Col>
              <Col span={16}>{profile.phoneNumber}</Col>
            </Row>
            <Row className="my-1">
              <Col span={8}>Status Account: </Col>
              <Col span={16}>{profile.statusAccount}</Col>
            </Row>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDetailStudent;
