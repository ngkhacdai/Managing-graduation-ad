import React, { useEffect, useState } from "react";
import TableTeacher from "./TableTeacher";
import HeaderTeacher from "./HeaderTeacher";

const TeacherScreen = () => {
  return (
    <div>
      <HeaderTeacher />
      <TableTeacher />
    </div>
  );
};

export default TeacherScreen;
