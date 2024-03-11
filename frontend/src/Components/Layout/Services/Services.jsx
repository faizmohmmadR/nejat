import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import FloodOutlinedIcon from "@mui/icons-material/FloodOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";

const iconStyle = {
  fontSize: "50px",
  color: "#86b817",
};
const services = [
  {
    id: 1,
    title: " Emergency Call",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaqueadipisicing elit. Enim eaqueadipisicing elit. Enim eaque",
    icon: <CallOutlinedIcon sx={iconStyle} />,
  },
  {
    id: 1,
    title: "Types of Disaster",
    disc: " Lit. Enim ueadipisicing elit. Enim eaque",
    icon: <FloodOutlinedIcon sx={iconStyle} />,
  },
  {
    id: 1,
    title: "Organizations && Hospitals",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaqueadipisicing elit. Enim eaqueadipisicing elit. Enim eaque",
    icon: <LocationCityOutlinedIcon sx={iconStyle} />,
  },
  {
    id: 1,
    title: "Human Casualties",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaqueadipisicing elit. Enim eaqueadipisicing elit. Enim eaque",
    icon: <EscalatorWarningOutlinedIcon sx={iconStyle} />,
  },
  {
    id: 1,
    title: "Test for service",
    disc: " Lorem ipsum donim eaqueadipisicing elit. Enim eaqueadipisicing elit. Enim eaque",
    icon: <AccountBalanceIcon sx={iconStyle} />,
  },
  {
    id: 1,
    title: "Test for service",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaqueadipisicing elit. Enim eaqueadipisicing elit. Enim eaque",
    icon: <AccountBalanceIcon sx={iconStyle} />,
  },
  {
    id: 1,
    title: "Test for service",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaqueadipisicing elit. Enim eaqueadipisicing elit. Enim eaque",
    icon: <AccountBalanceIcon sx={iconStyle} />,
  },
  {
    id: 1,
    title: "Test for service",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaqueadipisicing elit. Enim eaqueadipisicing elit. Enim eaque",
    icon: <AccountBalanceIcon sx={iconStyle} />,
  },
];


const testimounalCardStyle = {
  boxShadow: "2px 2px 4px #333",
  borderRadius: "2px",
  padding: "20px",
  background: "#fcfcfc",
  aspectRatio: 16 / 9,

  "&:hover": {
    background: "#d0ed91",
    color: "white",
  },
};

const Services = () => {


  return (
    <Grid container justifyContent={"center"} gap={3} padding={1}>
      <Grid item xs={12} md={12} textAlign={"center"}mt={6}>
        <Grid sx={{ display: "flex", justifyContent: "center", mb: "1em" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "10%",
              height: {xs: "2vh",md: '3vh'},
              justifyContent: "space-between",
              padding: "3px 0",
            }}
          >
            <Divider
              sx={{
                width: "30%",
                height: "2px",
                background: "#86b817",
                marginLeft: "70%",
              }}
            />
            <Divider
              sx={{
                width: "50%",
                height: "2px",
                background: "#86b817",
                marginLeft: "50%",
              }}
            />
          </Box>

          <Typography
            variant="normal"
            sx={{ fontWeight: "bold", margin: "0 0.5em", color: "#86b817" }}
          >
            SERVICES
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "10%",
              height: {xs: "2vh",md: '3vh'},
              justifyContent: "space-between",
              textAlign: "center",
              padding: "3px 0",
            }}
          >
            <Divider
              sx={{
                width: "30%",
                height: "2px",
                background: "#86b817",
              }}
            />
            <Divider
              sx={{ width: "50%", height: "2px", background: "#86b817" }}
            />
          </Box>
        </Grid>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Ouer Services
        </Typography>
      </Grid>
      {services.map((item,i) => (
        <Grid key={i} item xs={12} sm={5} md={3} lg={2.5}  sx={testimounalCardStyle}>
          {item.icon}
          <Typography variant="h6" mt={3} mb={1} sx={{ fontWeight: "bold" }}>
            {item.title}
          </Typography>
          <Typography sx={{ color: "#8c8e8d" }}>{item.disc} </Typography>
        </Grid>
      ))}
    </Grid>
  );
};
export default Services;
