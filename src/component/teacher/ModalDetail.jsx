import { Button, Col, Modal, Row, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { BiSolidUserDetail } from "react-icons/bi";

const ModalDetail = ({ profile }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <Tooltip title="View detail">
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
              <Col span={8}>Major: </Col>
              <Col span={16}>{profile.branch}</Col>
            </Row>
            <Row className="my-1">
              <Col span={8}>Degree: </Col>
              <Col span={16}>{profile.degree}</Col>
            </Row>
            <Row className="my-1">
              <Col span={8}>Begin Teaching Year: </Col>
              <Col span={16}>{profile.beginTeachingYear}</Col>
            </Row>
            <Row className="my-1">
              <Col span={8}>Phone Number: </Col>
              <Col span={16}>{profile.phoneNumber}</Col>
            </Row>
            <Row className="my-1">
              <Col span={8}>Mentee limit: </Col>
              <Col span={16}>{profile.limitOfMentees}</Col>
            </Row>
            <Row className="my-1">
              <Col span={8}>Status Account: </Col>
              <Col span={16}>{profile.status}</Col>
            </Row>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDetail;
