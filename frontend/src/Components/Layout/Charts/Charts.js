import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { Grid, Box, Typography, Divider } from "@mui/material";
import PieChart1 from "./PieChart";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 450,
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
];

const valueFormatter = (value) => `${value} occurrences`;

export default function Charts() {
  return (
    <Grid container sx={{ overflow: "auto" }}>
      <Grid item xs={12} md={12} textAlign={"center"} mt={4} mb={6}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: "1em",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "10%",
              height: { xs: "2vh", md: "3vh" },
              justifyContent: "space-between",
              padding: "3px 0",
            }}
          >
            <Divider
              sx={{
                width: "30%",
                height: "2px",
                background: "#7814c9",
                marginLeft: "70%",
              }}
            />
            <Divider
              sx={{
                width: "50%",
                height: "2px",
                background: "#7814c9",
                marginLeft: "50%",
              }}
            />
          </Box>

          <Typography
            variant="normal"
            sx={{
              fontWeight: "bold",
              margin: "0 0.5em",
              color: "#7814c9",
            }}
          >
            CHARTS
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "10%",
              height: { xs: "2vh", md: "3vh" },
              justifyContent: "space-between",
              textAlign: "center",
              padding: "3px 0",
            }}
          >
            <Divider
              sx={{
                width: "30%",
                height: "2px",
                background: "#7814c9",
              }}
            />
            <Divider
              sx={{ width: "50%", height: "2px", background: "#7814c9" }}
            />
          </Box>
        </Grid>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Newest Reports
        </Typography>
      </Grid>
      <Grid container justifyContent={"space-around"} bgcolor={"white"}>
        <Grid item xs={12} md={6} lg={4} textAlign={"center"}>
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
          <Typography
            variant="h6"
            ml={3}
            mb={6}
            lg={4}
            mt={4}
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
            textAlign={"start"}
          >
            The number of accidents in different provinces in the previous year
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          mt={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PieChart1 />

          <Typography
            variant="h6"
            ml={3}
            mb={6}
            lg={4}
            mt={4}
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            The four provinces that had the most casualties
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Box sx={{ flexGrow: 1 }}>
            <SparkLineChart
              plotType="bar"
              data={[1, 4, 2, 5, 7, 2, 4, 6]}
              height={280}
              showTooltip
              showHighlight
              xAxis={{
                scaleType: "band",
                data: [
                  new Date(2016, 0, 1),
                  new Date(2017, 0, 1),
                  new Date(2018, 0, 1),
                  new Date(2019, 0, 1),
                  new Date(2020, 0, 1),
                  new Date(2021, 0, 1),
                  new Date(2022, 0, 1),
                  new Date(2023, 0, 1),
                ],
                valueFormatter: (value) => value.getFullYear(),
              }}
            />
          </Box>
          <Typography
            variant="h6"
            ml={3}
            mb={6}
            lg={4}
            mt={6}
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            The number of people killed in the year from 2016 to 2023
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
