import { Button, Checkbox, Form, Modal, Radio, Select } from "antd";
import React, { useState } from "react";

const ModalFilter = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const showModal = () => {
    setIsShowModal(!isShowModal);
  };
  const handleOk = () => {
    setIsShowModal(false);
  };
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  return (
    <div className="flex justify-between items-center p-2">
      <Button type="primary" onClick={showModal}>
        Filter
      </Button>
      <div className="flex items-center">
        <p className="px-2">Select teacher: </p>
        <Select
          defaultValue="all"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "all",
              label: "All",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
          ]}
        />
      </div>
      <Modal
        title="Filter"
        onOk={handleOk}
        onCancel={showModal}
        open={isShowModal}
      >
        <Select
          mode="tags"
          style={{
            width: "100%",
          }}
          placeholder="Search major"
          onChange={handleChange}
          tokenSeparators={[","]}
          options={options}
        />
        <Form layout="vertical">
          <Form.Item name={"major"} label="Major">
            <Checkbox.Group
              style={{
                width: "100%",
              }}
              onChange={onChange}
            >
              <Checkbox value="A">A</Checkbox>
              <Checkbox value="B">B</Checkbox>
              <Checkbox value="C">C</Checkbox>
              <Checkbox value="D">D</Checkbox>
              <Checkbox value="E">E</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name="year" label="Year">
            <Radio.Group
              style={{
                width: "100%",
              }}
            >
              <Radio value="2024">2024</Radio>
              <Radio value="2023">2023</Radio>
              <Radio value="2022">2022</Radio>
              <Radio value="2021">2021</Radio>
              <Radio value="2020">2020</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalFilter;
