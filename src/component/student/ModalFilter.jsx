import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Modal,
  Radio,
  Row,
} from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchStudentThunk } from "../../redux/slice/StudentSlice";

const ModalFilter = ({
  listBranch,
  setCheckedBranch,
  branchChecked,
  searchText,
}) => {
  const [isShow, setIsShow] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const showModal = () => {
    setIsShow(true);
    form.setFieldsValue(branchChecked);
  };

  const onOk = () => {
    form.submit();
  };

  const submitForm = async (value) => {
    setCheckedBranch(value);
    const formData = {
      keyWord: searchText,
      status: value.status,

      branch: value.branch,
    };
    if (value.year) {
      formData.year = dayjs(value.year).get("year");
    }
    dispatch(searchStudentThunk(formData));

    setIsShow(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Filter
      </Button>
      <Modal
        open={isShow}
        onCancel={() => setIsShow(false)}
        onOk={onOk}
        title="Filter student"
        className="lg:!w-1/2 md:w-2/3 w-full"
      >
        <Form
          form={form}
          onFinish={submitForm}
          layout="vertical"
          className="select-none"
          initialValues={{
            branchChecked,
          }}
        >
          <Form.Item name="branch" label="Majors">
            <Checkbox.Group style={{ width: "100%" }}>
              <Row gutter={[10, 10]}>
                {listBranch.length > 0 &&
                  listBranch.map((item) => {
                    return (
                      <Col span={6} key={item.id}>
                        <Checkbox value={item.id}>{item.name}</Checkbox>
                      </Col>
                    );
                  })}
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name="year" label="Course year">
            <DatePicker picker="year" className="w-full" />
          </Form.Item>
          <Form.Item name="status" label="Status">
            <Checkbox.Group>
              <Checkbox value={"active"}>Active</Checkbox>
              <Checkbox value={"disabled"}>Disabled</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalFilter;
