import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartStudent = ({ dataForDashBoardByYearViews }) => {
  const data = [
    {
      name: "January",
      Processing: 4000,
      Private: 100,
      Public: 500,
      Reviewing: 50,
    },
    {
      name: "February",
      Processing: 3000,
      Private: 200,
      Public: 400,
      Reviewing: 60,
    },
    {
      name: "March",
      Processing: 2000,
      Private: 300,
      Public: 300,
      Reviewing: 70,
    },
    {
      name: "April",
      Processing: 2000,
      Private: 300,
      Public: 300,
      Reviewing: 80,
    },
    { name: "May", Processing: 1890, Private: 500, Public: 200, Reviewing: 90 },
    { name: "June", Processing: 2390, Private: 0, Public: 100, Reviewing: 100 },
    { name: "July", Processing: 2390, Private: 0, Public: 150, Reviewing: 110 },
    {
      name: "August",
      Processing: 3490,
      Private: 600,
      Public: 250,
      Reviewing: 120,
    },
    {
      name: "September",
      Processing: 3490,
      Private: 800,
      Public: 350,
      Reviewing: 130,
    },
    {
      name: "October",
      Processing: 3490,
      Private: 700,
      Public: 450,
      Reviewing: 140,
    },
    {
      name: "November",
      Processing: 3490,
      Private: 900,
      Public: 550,
      Reviewing: 150,
    },
    {
      name: "December",
      Processing: 3490,
      Private: 1000,
      Public: 650,
      Reviewing: 160,
    },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={dataForDashBoardByYearViews}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          <Line
            connectNulls
            type="monotone"
            dataKey="processing"
            stroke="#0088FE" // Blue color
            fill="#0088FE"
          />
          <Line
            connectNulls
            type="monotone"
            dataKey="isPrivate"
            stroke="#00C49F" // Green color
            fill="#00C49F"
          />
          <Line
            connectNulls
            type="monotone"
            dataKey="isPublic"
            stroke="#FFBB28" // Yellow color
            fill="#FFBB28"
          />
          <Line
            connectNulls
            type="monotone"
            dataKey="reviewing"
            stroke="#FF8042" // Orange color
            fill="#FF8042"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartStudent;
