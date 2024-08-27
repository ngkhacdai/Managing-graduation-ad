import React from "react";
import ModalFilter from "./ModalFilter";
import SearchProject from "./SearchProject";
import UploadProject from "./UploadProject";

const HeaderProject = () => {
  return (
    <div>
      <div className="my-2 text-right flex justify-between">
        <div className="flex pr-2">
          <div className="mr-2">
            <SearchProject />
          </div>
          <ModalFilter />
        </div>
        <div>
          <UploadProject />
        </div>
      </div>
    </div>
  );
};

export default HeaderProject;
