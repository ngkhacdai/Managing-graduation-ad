import React from "react";
import SearchTeacher from "./SearchTeacher";
import ModalAddTeacher from "./ModalAddTeacher";

const HeaderTeacher = () => {
  return (
    <div className="pb-2 flex justify-between items-center">
      <SearchTeacher />
      <div>
        <ModalAddTeacher />
      </div>
    </div>
  );
};

export default HeaderTeacher;
