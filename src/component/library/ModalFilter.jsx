import { Button, Checkbox, Col, Form, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataBranch } from "../../redux/slice/BranchSlice";
import { fillter, saveFilter } from "../../redux/slice/Library.slice";

const ModalFilter = ({ searchText, setFilter, filter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const listBranch = useSelector((state) => state.branch.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (listBranch.length === 0) {
      dispatch(fetchDataBranch());
    }
  }, [listBranch.length, dispatch]);

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
    const value = form.getFieldsValue();
    // dispatch(saveFilter(value));
    setFilter(value);
    const formData = {
      keyword: searchText,
      branch: value.branch,
      status: value.status,
    };
    dispatch(fillter(formData));
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
                  <Checkbox value="0">Private</Checkbox>
                </Col>
                <Col className="m-1">
                  <Checkbox value="1">Public</Checkbox>
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
