import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Tooltip from "@mui/material/Tooltip";

const data = [
  { value: 20, label: "UX Design  20%" },
  { value: 25, label: "App Development 125%" },
  { value: 25, label: "Infrastructure 25%" },
  { value: 30, label: "Marketing 30%" },
];

const size = {
  width: 350,
  height: 130,
};

function Piechart() {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          arcLabelMinAngle: 45,
          innerRadius: 40,
          paddingAngle: 2,
          cx: 55,
          cy: 60,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontWeight: "bold",
        },
      }}
      {...size}
    />
  );
}

export default Piechart;
