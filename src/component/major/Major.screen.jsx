import React, { useEffect, useState } from "react";
import TableMajor from "./TableMajor";
import ModalAddMajor from "./ModalAddMajor";

const MajorScreen = () => {
  const [majorData, setMajorData] = useState([]);
  const fakeMajorData = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    majorName: `major_${index}`,
  }));
  useEffect(() => {
    setMajorData(fakeMajorData);
  }, []);
  return (
    <div>
      <ModalAddMajor />
      <TableMajor majorData={majorData} />
    </div>
  );
};

export default MajorScreen;
