import React from "react";
// import styled from "styled-components";
// import { applyCardStyles } from "components/ReusableStyles";
import "../../css/TargetAudience.css"
import "../../css/Metric.css"
import { BsThreeDots } from "react-icons/bs";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";
function TargetAudience() {
  const data = [
    {
      uv: 4000,
    },
    {
      uv: 3000,
    },
    {
      uv: 2000,
    },
    {
      uv: 2780,
    },
    {
      uv: 1890,
    },
    {
      uv: 2390,
    },
    {
      uv: 3490,
    },
  ];
  return (
    <div className="tar">

      <div className="title-container">
        <div className="title2">
          <h3>Target Audience</h3>
          <BsThreeDots />
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data}>
            <Tooltip cursor={{ fill: "#3d741d7a" }} />
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="40%"
                  stopColor="var(--primary-color)"
                  stopOpacity={0.8}
                />
                <stop offset="80%" stopColor="#000000ff" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <Bar
              dataKey="uv"
              stackId="a"
              fill="url(#colorview)"
              animationBegin={800}
              animationDuration={2000}
              />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
   
  );
}



export default TargetAudience;