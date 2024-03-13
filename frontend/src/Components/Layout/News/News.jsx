import React from "react";
import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const services = [
  {
    id: 1,
    img: "../img/d.jpg",
    title: " Emergency Call",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaqueadipisicing elit. Enim eaqueadipisicing elit. Enim eaque",
  },
  {
    id: 1,
    img: "../img/floot2.jpg",
    title: "Types of Disaster",
    disc: " Lit. Enim ueadipisicing elit. Enim eaque",
  },
  {
    id: 1,
    img: "../img/ze.jpg",
    title: "Organizations && Hospitals",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaqueadipisicing elit. Enim eaqueadipisicing elit. Enim eaque",
  },
  {
    id: 1,
    img: "../img/fire.jpg",
    title: "Human Casualties",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaqueadipisicing elit. Enim eaqueadipisicing elit. Enim eaque",
  },
  {
    id: 1,
    img: "../img/er.jpg",
    title: "Test for service",
    disc: " Lorem ipsum donim eaqueadipisicing elit. Enim eaqueadipisicing elit. Enim eaque",
  },
  {
    id: 1,
    img: "../img/s.jpg",
    title: "Test for service",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaqueadipisicing elit. Enim eaqueadipisicing elit. Enim eaque",
  },
];

const newsCardStyle = {
  borderRadius: "2px",
  background: "#f6f6f6",
  textAlign: "center",
};
const iconStyle = {
  display: "flex",

  alignItems: "center",
  padding: "0.5em",
  border: "0.5px solid #d5dbde",
};

const News = () => {
  return (
    <Grid container justifyContent={"center"} gap={3} mt={4} mb={7} padding={1}>
      <Grid item xs={12} md={12} textAlign={"center"} mt={6}>
        <Grid sx={{ display: "flex", justifyContent: "center", mb: "1em" }}>
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
            sx={{ fontWeight: "bold", margin: "0 0.5em", color: "#7814c9" }}
          >
            NEWS
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
          Top News
        </Typography>
      </Grid>
      {services.map((item, i) => (
        <Grid item key={i} xs={12} sm={5.4} md={3} lg={3.7} sx={newsCardStyle}>
          <Grid container sx={{ overflow: "hidden" }}>
            <Grid
              item
              xs={12}
              component="img"
              alt="Image placeholder"
              src={item.img}
              title="name"
              sx={{
                minHeight: { xs: "30vh", md: "50svh" },
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                objectFit: "cover",
              }}
            ></Grid>
          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "#7814c9",
              fontSize: "17px",
            }}
          >
            <Grid item xs={4} sx={iconStyle}>
              <LocationOnIcon sx={{ fontSize: "18px", mr: "5px" }} />{" "}
              <Typography sx={{ color: "#8c8e8d" }}> Location</Typography>
            </Grid>

            <Grid item xs={4} sx={iconStyle}>
              <CalendarMonthIcon sx={{ fontSize: "18px", mr: "5px" }} />{" "}
              <Typography sx={{ color: "#8c8e8d" }}> 4 days</Typography>
            </Grid>

            <Grid item xs={4} sx={iconStyle}>
              <PersonIcon sx={{ fontSize: "18px", mr: "5px" }} />
              <Typography sx={{ color: "#8c8e8d" }}> 3 Person</Typography>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{ aspectRatio: 16 / 6, textAlign: "center", p: "0em 1.5em" }}
          >
            <Typography variant="h6" mt={3} mb={1} sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>

            <Typography sx={{ color: "#8c8e8d" }}>{item.disc}</Typography>
          </Grid>
          <Button
            variant="contained"
            sx={{
              mb: 2,
              zIndex: 0,
              bgcolor: "#7814c9",
              ":hover": { bgcolor: "#a141f0" },
            }}
          >
            Read More
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
export default News;
