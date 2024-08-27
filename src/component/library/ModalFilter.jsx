import { Button, Checkbox, Col, Form, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import { getBranchByPage } from "../../api/branch";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataBranch } from "../../redux/slice/BranchSlice";

const ModalFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ckbStatus, setCkbStatus] = useState([]);
  const [tempStatus, setTempStatus] = useState([]);
  const [ckbBranch, setCkbBranch] = useState([]);
  const [tempBranch, setTempBranch] = useState([]);
  const [form] = useForm();
  const listBranch = useSelector((state) => state.branch.data);
  const dispatch = useDispatch();

  const getBranchData = async () => {
    dispatch(fetchDataBranch());
  };

  useEffect(() => {
    if (listBranch <= 0) {
      getBranchData();
    }
  }, []);

  const showModal = () => {
    form.setFieldsValue({ status: ckbStatus, branch: ckbBranch });
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
    setCkbStatus(tempStatus);
    setCkbBranch(tempBranch);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setTempStatus(ckbStatus);
    setTempBranch(ckbBranch);
    setIsModalOpen(false);
  };

  const submitForm = () => {
    console.log(form.getFieldsValue());
  };

  const onStatusChange = (checkedValues) => {
    setTempStatus(checkedValues); // Cập nhật giá trị tạm thời cho status
  };

  const onBranchChange = (checkedValues) => {
    setTempBranch(checkedValues); // Cập nhật giá trị tạm thời cho branch
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
        <Form
          form={form}
          onFinish={submitForm}
          layout="vertical"
          initialValues={{
            status: ckbStatus,
            branch: ckbBranch,
          }}
          className="select-none"
        >
          <Form.Item label="Status" name="status">
            <Checkbox.Group
              style={{
                width: "100%",
              }}
              onChange={onStatusChange}
            >
              <Row>
                <Col className="m-1">
                  <Checkbox value="Public">Public</Checkbox>
                </Col>
                <Col className="m-1">
                  <Checkbox value="Private">Private</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name="branch" label="Branches">
            <Checkbox.Group
              style={{
                width: "100%",
              }}
              onChange={onBranchChange}
            >
              <Row>
                {listBranch.length > 0 &&
                  listBranch.map((item) => (
                    <Col className="m-1" key={item.id}>
                      <Checkbox value={item.id}>{item.name}</Checkbox>
                    </Col>
                  ))}
              </Row>
            </Checkbox.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalFilter;
