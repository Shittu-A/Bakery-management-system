import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';





const SalesBarChart = ({ data }) => {
  console.log('bar',data)
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
      barSize={40}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey='name' padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="qty" fill="#17a2b8" />
    </BarChart>
  );
};

export default SalesBarChart;







































































































