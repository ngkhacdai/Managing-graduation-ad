import { Button, Checkbox, Col, Form, Modal, Row } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import { searchTeacherThunk } from "../../redux/slice/TeacherSlice";
import { useDispatch } from "react-redux";

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
    form.setFieldsValue({ branch: branchChecked.branch });
  };

  const onOk = () => {
    form.submit();
  };

  const submitForm = (value) => {
    setCheckedBranch(value);
    const formData = {
      keyWord: searchText,
      status: value.status,

      branch: value.branch,
    };
    if (value.year) {
      formData.year = dayjs(value.year).get("year");
    }
    dispatch(searchTeacherThunk(formData));

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
        title="Filter mentor"
        className="lg:!w-1/2 md:w-2/3 w-full"
      >
        <Form
          form={form}
          onFinish={submitForm}
          layout="vertical"
          className="select-none"
          initialValues={{
            branch: branchChecked.branch,
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
        </Form>
      </Modal>
    </div>
  );
};

export default ModalFilter;
