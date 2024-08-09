import React, { useEffect, useState } from "react";
import TableMajor from "./TableMajor";
import ModalAddMajor from "./ModalAddMajor";

const MajorScreen = () => {
  return (
    <div>
      <ModalAddMajor />
      <TableMajor />
    </div>
  );
};

export default MajorScreen;
