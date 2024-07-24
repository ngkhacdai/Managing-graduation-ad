import React from "react";
const { Search } = Input;
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";

const SearchTeacher = () => {
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div>
      <Search
        className="max-w-96"
        placeholder="input search text"
        size="middle"
        suffix={suffix}
        onSearch={onSearch}
      />
    </div>
  );
};

export default SearchTeacher;
