import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import { Grid } from "@mui/material";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 400,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};
const dataset = [
  {
    floods: 59,
    earthquack: 57,
    storm: 86,
    volcano: 21,
    province: "Kabul",
  },
  {
    floods: 64,
    earthquack: 82,
    storm: 37,
    volcano: 93,
    province: "Badakhshan",
  },
  {
    floods: 22,
    earthquack: 76,
    storm: 49,
    volcano: 81,
    province: "Badghis",
  },
  {
    floods: 41,
    earthquack: 65,
    storm: 92,
    volcano: 18,
    province: "Baghlan",
  },
  {
    floods: 79,
    earthquack: 32,
    storm: 61,
    volcano: 54,
    province: "Balkh",
  },
  {
    floods: 63,
    earthquack: 46,
    storm: 17,
    volcano: 85,
    province: "Bamyan",
  },
  {
    floods: 28,
    earthquack: 89,
    storm: 73,
    volcano: 10,
    province: "Daykundi",
  },
  {
    floods: 76,
    earthquack: 51,
    storm: 36,
    volcano: 69,
    province: "Farah",
  },
  {
    floods: 55,
    earthquack: 81,
    storm: 27,
    volcano: 47,
    province: "Faryab",
  },
//   {
//     floods: 87,
//     earthquack: 39,
//     storm: 62,
//     volcano: 15,
//     province: "Ghazni",
//   },
//   {
//     floods: 32,
//     earthquack: 72,
//     storm: 58,
//     volcano: 91,
//     province: "Ghor",
//   },
//   {
//     floods: 67,
//     earthquack: 18,
//     storm: 84,
//     volcano: 41,
//     province: "Helmand",
//   },
//   {
//     floods: 48,
//     earthquack: 56,
//     storm: 95,
//     volcano: 29,
//     province: "Herat",
//   },
//   {
//     floods: 83,
//     earthquack: 28,
//     storm: 44,
//     volcano: 69,
//     province: "Jowzjan",
//   },
//   {
//     floods: 19,
//     earthquack: 65,
//     storm: 80,
//     volcano: 57,
//     province: "Kandahar",
//   },
//   {
//     floods: 72,
//     earthquack: 40,
//     storm: 55,
//     volcano: 88,
//     province: "Kapisa",
//   },
//   {
//     floods: 31,
//     earthquack: 59,
//     storm: 70,
//     volcano: 23,
//     province: "Khost",
//   },
//   {
//     floods: 58,
//     earthquack: 79,
//     storm: 32,
//     volcano: 51,
//     province: "Kunar",
//   },
//   {
//     floods: 45,
//     earthquack: 35,
//     storm: 76,
//     volcano: 94,
//     province: "Kunduz",
//   },
//   {
//     floods: 90,
//     earthquack: 24,
//     storm: 59,
//     volcano: 13,
//     province: "Laghman",
//   },
//   {
//     floods: 23,
//     earthquack: 71,
//     storm: 40,
//     volcano: 65,
//     province: "Logar",
//   },
//   {
//     floods: 69,
//     earthquack: 14,
//     storm: 88,
//     volcano: 32,
//     province: "Nangarhar",
//   },
//   {
//     floods: 36,
//     earthquack: 48,
//     storm: 27,
//     volcano: 79,
//     province: "Nimruz",
//   },
//   {
//     floods: 78,
//     earthquack: 91,
//     storm: 45,
//     volcano: 26,
//     province: "Nuristan",
//   },
//   {
//     floods: 53,
//     earthquack: 28,
//     storm: 64,
//     volcano: 72,
//     province: "Paktia",
//   },
//   {
//     floods: 17,
//     earthquack: 67,
//     storm: 39,
//     volcano: 59,
//     province: "Paktika",
//   },
];

const valueFormatter = (value) => `${value} occurrences`;

export default function Charts() {
  return (
    <Grid container sx={{ overflow: "auto" }}>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "province" }]}
        series={[
          { dataKey: "floods", label: "Floods", valueFormatter },
          { dataKey: "earthquack", label: "Earthquack", valueFormatter },
          { dataKey: "storm", label: "Storm", valueFormatter },
          { dataKey: "volcano", label: "Volcano", valueFormatter },
        ]}
        {...chartSetting}
      />
    </Grid>
  );
}
