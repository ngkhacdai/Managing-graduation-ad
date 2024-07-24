import React, { useEffect, useState } from "react";
import TableStudent from "./TableStudent";
import HeaderStudent from "./HeaderStudent";

const StudentScreen = () => {
  const [studentData, setStudentData] = useState([]);
  const fakeMajor = () => {
    return ["CK", "CNTT", "QTKD"][Math.floor(Math.random() * 4)];
  };
  const fakeStudentData = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    studentName: `Student - ${index}`,
    email: `Student${index}@gmail.com`,
    class: `Class ${index}`,
    major: fakeMajor(),
    password: Math.random().toString(36).slice(-8),
  }));
  useEffect(() => {
    setStudentData(fakeStudentData);
  }, []);
  return (
    <div>
      <HeaderStudent />
      <TableStudent studentData={studentData} />
    </div>
  );
};

export default StudentScreen;
