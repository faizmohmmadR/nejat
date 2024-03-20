import React from "react";
import { Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "100vw", Height: "100vh", bgcolor: "lightgray" }}
    >
      <Grid
        item
        xs={12}
        sx={{
          background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url("../../../../static/images/d.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          "@media (min-width:150px)": {
            height: "40vh",
          },
          "@media (min-width:300px)": {
            height: "50vh",
          },
          "@media (min-width:470px)": {
            height: "60vh",
          },
          "@media (min-width:960px)": {
            height: "70vh",
          },
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontSize: "24px",
            color: "white",
            textAlign: "center",
            padding: "6em",
            textTransform: "capitalize",
          }}
        >
          About Us
        </Typography>
      </Grid>
      <Outlet />
      <Grid
        container
        gap={2}
        justifyContent={"center"}
        margin={"10px"}
        padding={"15px"}
      >
        <Grid
          item
          component="img"
          alt="Image placeholder"
          src="../img/s.jpg"
          title="name"
          xs={11}
          md={5.8}
          sx={{ boxShadow: "0px 0px 7px #333" }}
        ></Grid>
        <Grid item xs={11} md={5.8}>
          <Typography
            variant="body1"
            component="p"
            sx={{
              bgcolor: "white",
              boxShadow: "0px 0px 10px #333",
              padding: "10px",
              minHeight: "100%",
              textAlign: "justify",
            }}
          >
            Natural disasters are catastrophic events that occur as a result of
            natural processes of the Earth. These events can cause significant
            damage to property, infrastructure, and human life. Some common
            types of natural disasters include earthquakes, hurricanes, floods,
            wildfires, tsunamis, and tornadoes. Earthquakes are caused by the
            shifting of tectonic plates beneath the Earth's surface, resulting
            in the sudden release of energy that causes the ground to shake.
            Hurricanes are large, powerful storms that form over warm ocean
            waters and can bring strong winds, heavy rain, and storm surges.
            Floods occur when an area receives an excessive amount of rainfall,
            causing rivers and lakes to overflow their banks. Wildfires are
            uncontrolled fires that spread rapidly through forests, grasslands,
            and other vegetation. Tsunamis are large ocean waves caused by
            underwater earthquakes, volcanic eruptions, or landslides. Tornadoes
            are powerful rotating columns of air that form during severe
            thunderstorms and can cause significant damage in a localized area.
            Natural disasters can have devastating effects on communities,
            causing loss of life, displacement of populations, and destruction
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
