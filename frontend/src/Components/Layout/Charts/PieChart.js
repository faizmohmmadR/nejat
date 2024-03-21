import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";

const data1 = [
  { label: "Group A", value: 400 },
  { label: "Group B", value: 300 },
  { label: "Group C", value: 300 },
  { label: "Group D", value: 200 },
];

const data2 = [
  { label: "A1", value: 100 },
  { label: "A2", value: 300 },
  { label: "B1", value: 100 },
  { label: "B2", value: 80 },
  { label: "B3", value: 40 },
  { label: "B4", value: 30 },
  { label: "B5", value: 50 },
  { label: "C1", value: 100 },
  { label: "C2", value: 200 },
  { label: "D1", value: 150 },
  { label: "D2", value: 50 },
];

const series = [
  {
    innerRadius: 0,
    outerRadius: 80,
    id: "series-1",
    data: data1,
    colorScheme: ["#008000", "#FF8C00", "#FF0000", "#000080"], // Custom colors for series-1 (Green, Orange, Red, Navy)
  },
  {
    innerRadius: 100,
    outerRadius: 120,
    id: "series-2",
    data: data2,
    colorScheme: [
      "#FFD700",
      "#FFA500",
      "#FF6347",
      "#8B4513",
      "#A0522D",
      "#CD853F",
      "#DAA520",
      "#FFB90F",
      "#FFDAB9",
      "#FA8072",
      "#800000",
    ], // Custom colors for series-2 (Gold, Orange, Tomato, Saddle Brown, Tan, Peru, Goldenrod, Dark Goldenrod, Peach Puff, Salmon, Maroon)
  },
];

export default function PieClickNoSnap() {
  const [itemData, setItemData] = React.useState();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: "100%" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <PieChart
          series={series}
          width={400}
          height={290}
          sx={{ mb: 5 }}
          slotProps={{
            legend: { hidden: true },
          }}
          onItemClick={(event, d) => setItemData(d)}
        />
      </Box>
    </Stack>
  );
}
