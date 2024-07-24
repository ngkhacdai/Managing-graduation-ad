import React, { useEffect, useState } from "react";
import TableTeacher from "./TableTeacher";
import HeaderTeacher from "./HeaderTeacher";

const TeacherScreen = () => {
  const [teacherData, setTeacherData] = useState([]);
  useEffect(() => {
    setTeacherData(fakeDataTeacher);
  }, []);
  const fakeWorkPlace = () => {
    return ["HN", "HCM", "DN"][Math.floor(Math.random() * 4)];
  };
  const fakeDataTeacher = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    teacherName: `Teacher - ${index}`,
    email: `teacher${index}@gmail.com`,
    workPlace: `Subject - ${index}`,
    degree: `degree - ${index}`,
    academicRank: `academicRank - ${index}`,
  }));
  return (
    <div>
      <HeaderTeacher />
      <TableTeacher teacherData={teacherData} />
    </div>
  );
};

export default TeacherScreen;
