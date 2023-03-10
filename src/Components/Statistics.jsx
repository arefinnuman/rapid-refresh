import React from "react";
import { useLoaderData } from "react-router-dom";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const totals = useLoaderData().data;
  return (
    <div className="flex min-h-screen justify-center items-center">
      <LineChart width={300} height={400} data={totals}>
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistics;
