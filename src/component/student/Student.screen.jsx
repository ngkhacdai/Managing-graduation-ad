import React, { useEffect, useState } from "react";
import TableStudent from "./TableStudent";
import HeaderStudent from "./HeaderStudent";

const StudentScreen = () => {
  return (
    <div>
      <HeaderStudent />
      <TableStudent />
    </div>
  );
};

export default StudentScreen;
