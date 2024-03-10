import { Grid, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Grid sx={{ margin: "0px auto" }} maxWidth="xl">
      <Grid
        container
        height="100vh"
        sx={{
          background: (theme) =>
            `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('img/d.jpg')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid item lg={12} textAlign="center" pt={10}>
          <Typography variant="h1" color="white">
            Welcome to Nejat
          </Typography>
          <Typography variant="h4" color="white" mt={15}>
            Explore the impact of earthquakes, floods, landslides, and more. Get
            informed, prepared, and empowered. Join us in building resilience
            for a safer future.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        margin="50px 0px"
        sx={{
          background: (theme) =>
            `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('img/d.jpg')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Grid
          xs={12}
          md={6}
          height="70svh"
          component="img"
          src="/img/s.jpg"
        ></Grid>
        <Grid xs={12} md={6} padding="0px 20px">
          <Typography variant="h4">Flood</Typography>

          <Typography>
            Floods, a force of nature that can both awe and devastate, have
            shaped the landscapes and communities throughout history. Join us on
            a journey to understand the immense power and impact of floods. Dive
            into the science behind floods, learning about the intricate
            mechanisms that lead to their occurrence. From heavy rainfall to
            overflowing rivers and coastal storms, we unravel the factors that
            contribute to these natural phenomena. Gain insights into the
            hydrological processes that shape the flow of water and the complex
            interactions with the environment. Explore the consequences of
            floods, from their immediate effects on communities to their
            long-term implications. Discover how floods can disrupt daily life,
            damage infrastructure, and impact economies. Delve into the social
            and psychological aspects, as communities rally together in the face
            of adversity and demonstrate the utmost resilience. Uncover the
            strategies and technologies used in flood management and mitigation.
            Learn about innovative engineering solutions, early warning systems,
            and adaptive measures that help communities prepare for and respond
            to these natural disasters. Understand the importance of urban
            planning, land management,
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        margin="50px 0px"
        sx={{
          background: (theme) =>
            `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/img/s.jpg')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Grid xs={12} md={6} padding="0px 20px">
          <Typography variant="h4">Flood</Typography>

          <Typography>
            Floods, a force of nature that can both awe and devastate, have
            shaped the landscapes and communities throughout history. Join us on
            a journey to understand the immense power and impact of floods. Dive
            into the science behind floods, learning about the intricate
            mechanisms that lead to their occurrence. From heavy rainfall to
            overflowing rivers and coastal storms, we unravel the factors that
            contribute to these natural phenomena. Gain insights into the
            hydrological processes that shape the flow of water and the complex
            interactions with the environment. Explore the consequences of
            floods, from their immediate effects on communities to their
            long-term implications. Discover how floods can disrupt daily life,
            damage infrastructure, and impact economies. Delve into the social
            and psychological aspects, as communities rally together in the face
            of adversity and demonstrate the utmost resilience. Uncover the
            strategies and technologies used in flood management and mitigation.
            Learn about innovative engineering solutions, early warning systems,
            and adaptive measures that help communities prepare for and respond
            to these natural disasters. Understand the importance of urban
            planning, land management,
          </Typography>
        </Grid>

        <Grid
          xs={12}
          md={6}
          height="70svh"
          component="img"
          src="/img/d.jpg"
        ></Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
