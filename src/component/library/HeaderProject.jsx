import React, { useState } from "react";
import ModalFilter from "./ModalFilter";
import SearchProject from "./SearchProject";
import UploadProject from "./UploadProject";

const HeaderProject = () => {
  const [filter, setFilter] = useState({ branch: [], status: [] });
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <div className="my-2 text-right flex justify-between">
        <div className="flex pr-2">
          <div className="mr-2">
            <SearchProject
              setSearchText={(value) => setSearchText(value)}
              filter={filter}
            />
          </div>
          <ModalFilter
            searchText={searchText}
            setFilter={(value) => setFilter(value)}
            filter={filter}
          />
        </div>
        {/* <div>
          <UploadProject />
        </div> */}
      </div>
    </div>
  );
};

export default HeaderProject;
