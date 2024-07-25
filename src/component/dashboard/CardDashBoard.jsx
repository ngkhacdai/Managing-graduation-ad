import { Button, Card } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { setDetail } from "../../redux/slice/DashBoard.slice";

const CardDashBoard = ({ title, totalTitle }) => {
  const dispatch = useDispatch();
  const saveTitle = () => {
    dispatch(setDetail(title));
  };
  return (
    <div>
      <Card
        className="drop-shadow-xl"
        title={<p className="text-xl font-bold">{totalTitle}</p>}
        bordered={false}
      >
        <p className="text-black text-lg">{title}</p>
        {/* <Button onClick={saveTitle} type="link">
          Detail
        </Button> */}
      </Card>
    </div>
  );
};

export default CardDashBoard;
