import React, { useEffect, useState } from "react";
const { Search } = Input;
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataBranch } from "../../redux/slice/BranchSlice";
import ModalFilter from "./ModalFilter";
import { searchStudentThunk } from "../../redux/slice/StudentSlice";
import dayjs from "dayjs";
const SearchStudent = () => {
  const branch = useSelector((state) => state.branch.data);
  const [filter, setFilter] = useState({ branch: [], year: null, status: [] });
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (branch && branch.length <= 0) {
      dispatch(fetchDataBranch());
    }
  }, []);
  const onSearch = (value) => {
    setSearchText(value);
    const formData = {
      keyWord: value,
      status: filter.status,
      branch: filter.branch,
    };
    if (filter.year) {
      formData.year = dayjs(filter.year).day("year");
    }
    dispatch(searchStudentThunk(formData));
  };
  return (
    <div className="flex gap-2">
      <Search
        className="max-w-96"
        placeholder="input search text"
        size="middle"
        onSearch={onSearch}
      />
      <ModalFilter
        setCheckedBranch={(value) => setFilter(value)}
        branchChecked={filter}
        listBranch={branch}
        searchText={searchText}
      />
    </div>
  );
};

export default SearchStudent;
