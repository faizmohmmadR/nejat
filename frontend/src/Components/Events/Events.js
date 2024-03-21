import React from "react";
import { Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useTranslation } from "react-i18next";
const events = [
  {
    id: 1,
    img: "../../../../../static/images/d.jpg",
    title: "Herat Earthquack",
    disc: " Lorem ipsum dolor, sit amet conlit. Enim eaqueadipisicing elit. Enim eaque",
  },
  {
    id: 1,
    img: "../../../../../static/images/floot2.jpg",
    title: "Farah Flood",
    disc: " nim ueaLit. Enim ueaLit. Enim ueaLit. Enim ueaLit. Enim ueaLit. Enim uea ",
  },
  {
    id: 1,
    img: "../../../../../static/images/ze.jpg",
    title: "Badekhshan Earthquack",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisici eaqueadipisicing elit. Enim eaque",
  },
  {
    id: 1,
    img: "../../../../../static/images/ze.jpg",
    title: "Kabul Earthquack",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisici eaqueadipisicing elit. Enim eaque",
  },
  {
    id: 1,
    img: "../../../../../static/images/ze.jpg",
    title: "Kabul Earthquack",
    disc: " Lorem ipsum dolor, sit amet consectetur adipisici eaqueadipisicing elit. Enim eaque",
  },
  {
    id: 1,
    img: "../../../../../static/images/fire.jpg",
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
  const { t } = useTranslation();
  return (
    <Grid container sx={{ width: "100%" }}>
      <Grid item xs={12} md={10} sx={{ padding: "1em" }}>
        <Grid
          item
          xs={12}
          md={12}
          sm={12}
          lg={12}
          sx={{
            background: (theme) =>
              `linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.10)), url('../../../../static/images/d.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: {
              xs: "40vh",
              sm: "40vh",
              md: "60vh",
              lg: "50 vh",
              xl: "50vh",
            },
            borderRadius: "0.3em",
            textAlign: "center",
            padding: " 4em 3.2em",
          }}
        >
          <Grid
            item
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              width: "100%",
              height: {
                xs: "25vh",
                sm: "25vh",
                md: "40vh",
                lg: "35vh",
                xl: "30vh",
              },
              borderRadius: "0.3em",
              padding: "2em",
              color: "white",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                marginBottom: "1em",
                fontSize: { xs: "16px", sm: "26px", md: "40px", xl: "25px" },
              }}
            >
             {t("events:events")}
            </Typography>
            <Typography
              variant="normal"
              sx={{
                textTransform: "-moz-initial",
                fontSize: { xs: "8px", sm: "14px", md: "20px", xl: "25px" },
              }}
            >
              {t("events:des")}
            </Typography>
          </Grid>
        </Grid>

        <Grid container gap={2} sx={{ display: "flex", mt: "2em" }}>
          <Grid item md={12} sm={9.9}>
            <Grid container gap={2}>
              {events.map((item, i) => (
                <Grid
                  item
                  key={i}
                  xs={12}
                  sm={5.77}
                  md={5.85}
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
                      minHeight: {
                        xs: "30vh",
                        sm: "50",
                        md: "50vh",
                        lg: "45vh",
                        xl: "40vh",
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
                        lg: "16/6",
                        xl: "16/6",
                      },

                      justifyContent: "space-between",
                      p: "0em 1.5em",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.title}
                    </Typography>

                    <Typography sx={{ color: "#8c8e8d" }}>
                      {item.disc}
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      justifyContent: "space-between",
                      padding: "0.5em 1em",
                    }}
                  >
                    <Grid item sx={{ display: "flex", alignItems: "center" }}>
                      <LocationOnIcon
                        sx={{
                          fontSize: {
                            md: "16px",
                            sm: "10px",
                          },
                          color: "#7814c9",
                          mr: "0.4em",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: {
                            md: "16px",
                            sm: "10px",
                          },
                          color: "#8c8e8d",
                        }}
                      >
                        location
                      </Typography>
                    </Grid>
                    <Grid item sx={{ display: "flex", alignItems: "center" }}>
                      <PersonIcon
                        sx={{
                          color: "#7814c9",
                          fontSize: {
                            md: "16px",
                            sm: "10px",
                          },
                          mr: "0.5em",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: {
                            md: "16px",
                            sm: "10px",
                          },
                          color: "#8c8e8d",
                        }}
                      >
                        people
                      </Typography>
                    </Grid>
                    <Grid item sx={{ display: "flex", alignItems: "center" }}>
                      <CalendarMonthIcon
                        sx={{
                          fontSize: {
                            md: "16px",
                            sm: "10px",
                          },
                          color: "#7814c9",
                          mr: "0.5em",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: {
                            md: "16px",
                            sm: "10px",
                          },
                          color: "#8c8e8d",
                        }}
                      >
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
            sm={1.73}
            sx={{
              display: { xs: "flex", sm: " flex", md: "none" },
              flexDirection: "column",
            }}
          >
            <Grid item md={10} sx={{ bgcolor: "white" }}>
              <Typography
                variant="normal"
                sx={{ fontWeight: "bold", textTransform: "capitalize",fontSize:"18px"}}
              >
                  {t("events:province")}
              </Typography>

              <List>
                {provinces.map((item, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      cursor: "pointer",
                      ":hover": { bgcolor: "#9c9c9c", color: "white" },
                    }}
                  >
                    {item.provinces}
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        md={2}
        sx={{
          paddingTop: "1em",
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          flexDirection: "column",
        }}
      >
        <Grid item md={11} sx={{ bgcolor: "white", padding: "1em 0.4em" }}>
          <Typography
            variant="normal"
            sx={{ fontWeight: "bold",fontSize:"20px", textTransform: "capitalize" }}
          >
            {t("events:province")}
          </Typography>

          <List>
            {provinces.map((item, i) => (
              <ListItem
                key={i}
                sx={{
                  cursor: "pointer",
                  ":hover": { bgcolor: "#9c9c9c", color: "white" },
                }}
              >
                {item.provinces}
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Events;
