import React from "react";
import SearchStudent from "./SearchStudent";
import ModalAddStudent from "./ModalAddStudent";

const HeaderStudent = () => {
  return (
    <div className="my-2 text-right flex justify-between">
      <div className="flex pr-2">
        <div className="mr-2">
          <SearchStudent />
        </div>
        {/* <ModalFilter
            filter={(item) => {
              filter(item);
            }}
          /> */}
      </div>
      <div>
        <ModalAddStudent />
      </div>
    </div>
  );
};

export default HeaderStudent;
