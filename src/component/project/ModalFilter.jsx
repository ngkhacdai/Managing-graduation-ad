import { Button, Checkbox, Col, Form, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import { getBranchByPage } from "../../api/branch";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataBranch } from "../../redux/slice/BranchSlice";
import { saveFilter } from "../../redux/slice/ProjectSlice";

const ModalFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const listBranch = useSelector((state) => state.branch.data);
  const filter = useSelector((state) => state.project.filter);
  const dispatch = useDispatch();
  console.log(filter);

  const getBranchData = async () => {
    dispatch(fetchDataBranch());
  };

  useEffect(() => {
    if (listBranch <= 0) {
      getBranchData();
    }
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
    form.setFieldsValue(filter);
  };

  const handleOk = () => {
    form.submit();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const submitForm = () => {
    console.log("value", form.getFieldsValue());

    dispatch(saveFilter(form.getFieldsValue()));
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
            status: filter.status,
            branch: filter.branch,
          }}
          className="select-none"
        >
          <Form.Item label="Status" name="status">
            <Checkbox.Group
              style={{
                width: "100%",
              }}
            >
              <Row>
                <Col className="m-1">
                  <Checkbox value="Processing">Processing</Checkbox>
                </Col>
                <Col className="m-1">
                  <Checkbox value="Reviewing">Reviewing</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name="branch" label="Branches">
            <Checkbox.Group
              style={{
                width: "100%",
              }}
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
