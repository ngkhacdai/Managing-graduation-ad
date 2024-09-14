import React from "react";
const { Search } = Input;
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fillter } from "../../redux/slice/Library.slice";
import { saveSearchInput } from "../../redux/slice/Library.slice";
const SearchProject = ({ filter, setSearchText }) => {
  const dispatch = useDispatch();
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );
  const onSearch = (value) => {
    const form = {
      keyword: value,
      branch: filter.branch,
    };
    dispatch(fillter(form));
    dispatch(saveSearchInput(value));
  };
  return (
    <div>
      <Search
        className="max-w-96"
        placeholder="input search text"
        size="middle"
        suffix={suffix}
        onSearch={onSearch}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchProject;
