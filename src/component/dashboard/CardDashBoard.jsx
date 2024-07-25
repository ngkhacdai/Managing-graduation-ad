import { Button, Card } from "antd";
import React from "react";

const CardDashBoard = ({ title, totalTitle }) => {
  return (
    <div>
      <Card
        className="drop-shadow-xl"
        title={<p className="text-xl font-bold">{totalTitle}</p>}
        bordered={false}
      >
        <p className="text-black text-lg">{title}</p>
        <Button type="link">Detail</Button>
      </Card>
    </div>
  );
};

export default CardDashBoard;
