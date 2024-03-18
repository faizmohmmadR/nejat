import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
const events = [
  {
    id: 1,
    img: "../img/d.jpg",
    title: " Emergency Call",
    disc: " Lorem ipsum dolor, sit amet conlit. Enim eaqueadipisicing elit. Enim eaque",
  },
  {
    id: 1,
    img: "../img/floot2.jpg",
    title: "Types of Disaster",
    disc: " nim ueaLit. Enim ueaLit. Enim ueaLit. Enim ueaLit. Enim ueaLit. Enim uea ",
  },
  {
    id: 1,
    img: "../img/ze.jpg",
    title: "Hospitals",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisici eaqueadipisicing elit. Enim eaque",
  },
  {
    id: 1,
    img: "../img/ze.jpg",
    title: "Hospitals",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisici eaqueadipisicing elit. Enim eaque",
  },
  {
    id: 1,
    img: "../img/ze.jpg",
    title: "Hospitals",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisici eaqueadipisicing elit. Enim eaque",
  },
  {
    id: 1,
    img: "../img/fire.jpg",
    title: "Human Casualties",
    disc: " Lorem ipsum dolor, sit amet c eaqueadipisicing elit. Enim eaque",
  },
];
const provinces = [
  {
    id: 2,
    provinces: "Kabul",
  },
  {
    id: 2,
    provinces: "Ghazni",
  },
  {
    id: 2,
    provinces: "Ghor",
  },
  {
    id: 2,
    provinces: "Kandahar",
  },

  {
    id: 2,
    provinces: "Balkh",
  },
  {
    id: 2,
    provinces: "Khost",
  },
  {
    id: 2,
    provinces: "Parwan",
  },
];

const Events = () => {
  return (
    <Grid container sx={{ width: "100%" }}>
      <Grid item md={10} sx={{ padding: "2em" }}>
        <Grid container gap={2}>
          <Grid
            item
            md={12}
            sx={{
              background: (theme) =>
                `linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.10)), url('img/d.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: {
                xs: "40vh",
                sm: "50vh",
                md: "60vh",
                lg: "50 vh",
                xl: "30vh",
              },
              borderRadius: "0.3em",
              textAlign: "center",
              padding: " 4em 3.2em",
            }}
          >
            <Grid
              item
              sx={{
                backgroundColor: "rgba(120, 20, 201, 0.6)",
                width: "100%",
                height: {
                  xs: "25vh",
                  sm: "30vh",
                  md: "40vh",
                  lg: "35vh",
                  xl: "20vh",
                },
                borderRadius: "0.3em",
                padding: "2em",
                color: "white",
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", marginBottom: "1em" ,fontSize: { xs: "16px", sm: "26px",md:"40px" ,xl: "25px" }}}
              >
                Events
              </Typography>
              <Typography
                variant="normal"
                sx={{
                  textTransform: "-moz-initial",
                  fontSize: { xs: "8px", sm: "14px",md:"20px", xl: "25px" },
                }}
              >
                Keep tabs on all kinds of current & upcoming natural events that
                occur in Afghanistan! And be aware of all natural disasters such
                as fires, floods, earthquakes and etc around you.
              </Typography>
            </Grid>
          </Grid>
          {events.map((item, i) => (
            <Grid
              item
              key={i}
              xs={12}
              sm={5.85}
              md={5.86}
              lg={3.87}
              sx={{ borderRadius: "0.3em", background: "white" }}
            >
              <Grid
                item
                xs={12}
                component="img"
                alt="Image placeholder"
                src={item.img}
                title="name"
                sx={{
                  Height: {
                    xs: "30vh",
                    sm: "30vh",
                    md: "30vh",
                    xl: "20svh",
                  },

                  borderTopRightRadius: "0.3em",
                  borderTopLeftRadius: "0.3em",
                }}
              ></Grid>

              <Grid
                item
                sx={{
                  aspectRatio: {
                    xs: "16/5",
                    sm: "16/8",
                    md: "16 / 6",
                    xl: "16/7",
                  },

                  justifyContent: "space-between",
                  p: "0em 1.5em",
                }}
              >
                <Typography
                  variant="h6"
                  mt={3}
                  mb={1}
                  sx={{ fontWeight: "bold" }}
                >
                  {item.title}
                </Typography>

                <Typography sx={{ color: "#8c8e8d" }}>{item.disc}</Typography>
              </Grid>
              <Grid
                container
                sx={{ justifyContent: "space-between", padding: "0.5em 1em" }}
              >
                <Grid item sx={{ display: "flex" }}>
                  <LocationOnIcon
                    sx={{ fontSize: "16px", color: "#7814c9", mr: "0.5em" }}
                  />
                  <Typography sx={{ fontSize: "14px", color: "#8c8e8d" }}>
                    location
                  </Typography>
                </Grid>
                <Grid item sx={{ display: "flex", color: "#7814c9" }}>
                  <PersonIcon sx={{ fontSize: "16px", mr: "0.5em" }} />
                  <Typography sx={{ fontSize: "14px", color: "#8c8e8d" }}>
                    people
                  </Typography>
                </Grid>
                <Grid item sx={{ display: "flex" }}>
                  <CalendarMonthIcon
                    sx={{ fontSize: "16px", color: "#7814c9", mr: "0.5em" }}
                  />
                  <Typography sx={{ fontSize: "14px", color: "#8c8e8d" }}>
                    {" "}
                    3 day
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        md={2}
        sx={{ paddingTop: "2em", display: "flex", flexDirection: "column" }}
      >
        <Grid item md={10} sx={{ bgcolor: "white", padding: "1em 0.4em" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", textTransform: "uppercase" }}
          >
            provinces
          </Typography>

          {provinces.map((item, i) => (
            <nav aria-label="secondary mailbox folders " key={i}>
              <List>
                <ListItem disablePadding>
                  <ListItemButton sx={{ height: "6vh" }}>
                    <ListItemText primary={item.provinces} />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Events;
