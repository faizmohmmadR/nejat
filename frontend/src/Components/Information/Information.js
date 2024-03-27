import React from "react";
import { Grid, Typography, Divider, Box} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
const type_des = [
  {
    id: 3,
    des: "Flood",
  },
  {
    id: 3,
    des: "Fires",
  },
  {
    id: 3,
    des: "Earthquakes",
  },
  {
    id: 3,
    des: "Hurricanes",
  },
  {
    id: 3,
    des: "Tornadoes",
  },
  {
    id: 3,
    des: "Avalanches",
  },
  {
    id: 3,
    des: "Droughts",
  },
  {
    id: 3,
    des: "Wildfires",
  },
  {
    id: 3,
    des: "Landslides",
  },
];
const Information = () => {
  return (
    <Grid sx={{ width: "100%" }}>
      <Grid item xs={12} md={12} sx={{ padding: "1em" }}>
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
              xl: "40vh",
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
                lg: "40vh",
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
                fontSize: { xs: "16px", sm: "26px", md: "40px",lg:"50px", xl: "40px" },
              }}
            >
              Natural Disasters
            </Typography>
            <Typography
              variant="normal"
              sx={{
                textTransform: "-moz-initial",
                fontSize: { xs: "8px", sm: "14px", md: "20px",lg:"30px", xl: "30px" },
              }}
            >
              Natural disasters are extreme events that cause significant damage
              to life, property, and environment.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            padding: "0em 0.2em",
            bgcolor: "white",
            borderRadius: "0.3em",
            marginTop: "1em",
          }}
        >
          <List
            sx={{
              display: { sm: "none", md: "flex" },
              flexDirection: "row",
              justifyItems: "center",
            }}
          >
            {type_des.map((item, i) => (
              <ListItem
                key={i}
                sx={{
                  cursor: "pointer",
                  justifyContent: "center",
                  ":hover": { bgcolor: "#9c9c9c", color: "white" },
                }}
              >
                {item.des}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            bgcolor: "white",
            borderRadius: "0.3em",
            borderTop: "2px solid red",
            padding: "1em",
          }}
        >
          <Grid
            container
            gap={1}
            sx={{ marginTop: "1em", justifyContent: "space-between" }}
          >
            <Grid item xs={12}  md={6.5} sx={{ padding: "0em 1em" }}>
              <Grid
                sx={{ display: "flex", justifyContent: "center", mb: "1em" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30%",
                    height: { xs: "4vh", md: "6vh" ,lg:"6vh",xl:"2vh"},
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "3px 0",
                  }}
                >
                  <Divider
                    sx={{
                      width: "40%",
                      height: "2px",
                      background: "#7814c9",
                    }}
                  />
                  <Divider
                    sx={{
                      width: "60%",
                      height: "2px",
                      background: "#7814c9",
                    }}
                  />
                  <Divider
                    sx={{
                      width: "80%",
                      height: "2px",
                      background: "#7814c9",
                    }}
                  />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#7814c9",
                  }}
                >
                  Flood
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30%",
                    height: { xs: "4vh", md: "6vh",lg:"6vh",xl:"2vh" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "3px 0",
                  }}
                >
                  <Divider
                    sx={{
                      width: "40%",
                      height: "2px",
                      background: "#7814c9",
                    }}
                  />
                  <Divider
                    sx={{
                      width: "60%",
                      height: "2px",
                      background: "#7814c9",
                    }}
                  />
                  <Divider
                    sx={{
                      width: "80%",
                      height: "2px",
                      background: "#7814c9",
                    }}
                  />
                </Box>
              </Grid>
              <Grid container>
                <Typography
                  variant="normal"
                  sx={{ fontSize: "14px", textAlign: "justify" }}
                >
                  A flood is a large amount of water that flows quickly and
                  overflows, covering a part of the land that is not under water
                  under normal conditions, in other words; A flood is a
                  relatively high rise of water in a river or channel, which has
                  a relative state and is generally measured against the normal
                  regime. Floods are one of the most common natural disasters
                  that generally occur in low-lying areas, along seas and water
                  streams, and near dams, which cause a lot of financial and
                  human losses. A flood is a large amount of water that flows
                  quickly and overflows, covering a part of the land that is not
                  under water under normal conditions, in other words; A flood
                  is a relatively high rise of water in a river or channel,
                  which has a relative state and is generally measured against
                  the normal regime. Floods are one of the most common natural
                  disasters that generally occur in low-lying areas, along seas
                  and water streams, and near dams, which cause a lot of
                  financial and human losses. A flood is a large amount of water
                  that flows quickly and overflows, covering a part of the land
                  that is not under water under normal conditions, in other
                  words; A flood is a relatively high rise of water in a river
                  or channel, which has a relative state and is generally
                  measured against the normal regime. Floods are one of the most
                  common natural disasters that generally occur in low-lying
                  areas, along seas and water streams, and near dams, which
                  cause a lot of financial and human losses. A flood is a large
                  amount of water that flows quickly and overflows, covering a
                  part of the land that is not under water under normal
                  conditions, in other words; A flood is a relatively high rise
                  of water in a river or channel, which has a relative state and
                  is generally measured against the normal regime. Floods are
                  one of the most common natural disasters that generally occur
                  in low-lying areas, along seas and water streams, and near
                  dams, which cause a lot of financial and human losses. A flood
                  is a large amount of water that flows quickly and overflows,
                  covering a part of the land that is not under water under
                  normal conditions, in other words; A flood is a relatively
                  high rise of water in a river or channel, which has a relative
                  state and is generally measured against the normal regime.
                  Floods are one of the most common natural disasters that
                  generally occur in low-lying areas, along seas and water
                  streams, and near dams, which cause a lot of financial and
                  human losses. A flood is a large amount of water that flows
                  quickly and overflows, covering a part of the land that is not
                  under water under normal conditions, in other words; A flood
                  is a relatively high rise of water in a river or channel,
                  which has a relative state and is generally measured against
                  the normal regime. Floods are one of the most common natural
                  disasters that generally occur in low-lying areas, along seas
                  and water streams, and near dams, which cause a lot of
                  financial and human losses. losses.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={5.4}
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                bgcolor: "#f5faf9",
                padding: " 1em",
                borderRadius: "0.3em",
              }}
            >
              <Grid
                item
                xs={12}
                md={12}
                sx={{ minHeight: {md:"40vh",lg:"20vh"}, mb: "1em" }}
                component="img"
                alt="Image placeholder"
                src="../../../../../static/images/floods.png"
                title="name"
              ></Grid>
              <Grid item xs={12} md={12}>
                <Typography
                  variant="normal"
                  sx={{
                    fontWeight: "bold",
                    m: "1em 0em",
                    fontSize: "16px",
                  }}
                >
                  Causes:
                </Typography>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{ display: { sm: "flex", md: "flex" }, marginTop: "1em" }}
                >
                  <Typography
                    variant="normal"
                    sx={{ fontSize: "14px", textAlign: "justify" }}
                  >
                    Flooding in Afghanistan can be caused by heavy rainfall,
                    melting snow, and human activities like deforestation and
                    urbanization. Climate change is expected to increase the
                    frequency and intensity of floods worldwide. Floods can lead
                    to loss of life, displacement, property damage, health
                    risks, psychological effects, and disruption of services. It
                    is important to prepare and reduce the risks associated with
                    flooding to protect yourself and your community. Prioritize
                    safety during flooding, follow instructions from local
                    authorities, be aware of weather conditions, and consider
                    measures to protect your property if you live in a
                    flood-prone area. Safety should always be the top priority
                    during a flood. Flooding in Afghanistan can be caused by
                    heavy rainfall, melting snow, and human activities like
                    deforestation and urbanization. Climate change is expected
                    to increase the frequency and intensity of floods worldwide.
                    Floods can lead to loss of life, displacement, property
                    damage, health risks, psychological effects, and disruption
                    of services. It is important to prepare and reduce the risks
                    associated with flooding to protect yourself and your
                    community. Prioritize safety during flooding, follow
                    instructions from local authorities, be aware of weather
                    conditions, and consider measures to protect your property
                    if you live in a flood-prone area. Safety should always be
                    the top priority during a flood.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              background: (theme) =>
                `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('../../../../static/images/floot1.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              padding: "1em",
              margin: "1em 0em",
              borderRadius: "0.3em",
            }}
          >
            <Grid container>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: "1em" }}>
                Safety tips during, before, and after a Natural disaster
              </Typography>
              <Typography
                variant="normal"
                sx={{ mt: "1em",  textAlign: "justify" }}
              >
                Flood is one of the most destructive natural disasters that
                causes yearly damage in different parts of Afghanistan. In
                recent years, we have witnessed massive floods due to the
                extent, weather conditions, and spatial and temporal
                precipitation changes. In the direction of better and preventive
                management, safety measures are designed and implemented before,
                during, and after terrible floods to minimize the adverse
                effects and irreparable damages of floods. Since flood
                prevention is cost-effective in terms of cost, time, and damage,
                and if it occurs, it increases the speed of response to the
                crisis, this article aims to provide general information about
                the necessary measures in the three stages before, during, and
                after, from the event as safety tips. Before a flood, measures
                such as avoiding construction in flood-prone areas, securing
                essential items, and preparing emergency supplies are
                recommended. During a flood, it advises evacuating high-risk
                areas, staying informed through media, and avoiding flooded
                paths. After a flood, tips include contacting local
                organizations for assistance, handling fire hazards, watching
                out for dangerous animals, and ensuring food and water safety.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Information;
