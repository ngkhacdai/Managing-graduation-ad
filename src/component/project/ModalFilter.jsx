import { Button, Checkbox, Col, Form, Modal, Row } from "antd";
import React, { useState } from "react";

const ModalFilter = ({ filter }) => {
  const initialStatus = ["Public", "Private", "Processing"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ckbStatus, setCkbStatus] = useState(initialStatus);
  const [tempStatus, setTempStatus] = useState(initialStatus);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    filter(tempStatus);
    setCkbStatus(tempStatus);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setTempStatus(ckbStatus); // Revert to the last saved state
    setIsModalOpen(false);
  };

  const onChange = (checkedValues) => {
    setTempStatus(checkedValues);
  };

  return (
    <div>
      <Button onClick={showModal}>Filter</Button>
      <Modal
        title="Filter Project"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className="pb-1">Status</p>
        <Form>
          <Form.Item>
            <Checkbox.Group
              style={{
                width: "100%",
              }}
              value={tempStatus}
              onChange={onChange}
            >
              <Row>
                <Col span={6}>
                  <Checkbox value="Public">Public</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="Private">Private</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="Processing">Processing</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="Processing">Reviewing</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalFilter;
