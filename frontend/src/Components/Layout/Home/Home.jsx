import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Services from "../Services/Services";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import News from "../News/News";

const Home = () => {
  const data = [
    { id: 1, title: " Rapid Aid" },
    { id: 2, title: "Efficient Support" },
    { id: 3, title: "Safe Evacuations" },
    { id: 4, title: "Shelter Provision" },
    { id: 5, title: "Life-saving Missions" },
    { id: 6, title: "Risk Reduction" },
  ];

  return (
    <Grid sx={{ margin: "0px auto" }} maxWidth="xl" width={"100%"}>
      <Grid
        container
        sx={{
          background: (theme) =>
            `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('img/d.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "50vh", md: "100vh" },
        }}
      >
        <Grid item lg={12} textAlign="center" pt={10}>
          <Typography
            variant="h1"
            color="white"
            sx={{ fontSize: { xs: "40px", md: "70px" } }}
          >
            Welcome to Nejat
          </Typography>
          <Typography
            variant="h4"
            color="white"
            mt={15}
            sx={{ fontSize: { xs: "12px", md: "30px" } }}
          >
            Explore the impact of earthquakes, floods, landslides, and more. Get
            informed, prepared, and empowered. Join us in building resilience
            for a safer future.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" gap={5} margin={"50px 0px"}>
        <Grid item lg={12} textAlign={"center"}>
          <Box
            component={"img"}
            src="/img/Nejat.png"
            width="20vw"
            height="16/9"
          ></Box>
        </Grid>
        <Grid
          item
          xs={11}
          md={5}
          sx={{
            aspectRatio: 16 / 14,
            backgroundImage: "url(/img/flood.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid
          item
          xs={11}
          md={5}
          padding="0px 20px"
          sx={{ aspectRatio: 16 / 14 }}
        >
          <Typography variant="h5" color={"green"} fontWeight="bold">
            About us
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            Welcome to <span style={{ color: "green" }}> NEJAT</span>
          </Typography>
          <Typography color={"text.secondary"} mt={1}>
            {" "}
            Nejat explore the impact of earthquakes, floods and more. Get
            informed, prepared, and empowered. Join us in building resilience
            for a safer future.
          </Typography>
          <Typography color="text.secondary" mt={4}>
            Nejat Natural Disaster System: Unveiling Nature's Power Prepare.
            Respond. Protect. Discover the tools and knowledge to mitigate the
            impact of natural disasters. Real-time alerts, interactive maps, and
            expert insights empower communities to stay informed and take
            proactive measures. Join our community of resilience. Exchange
            experiences, share best practices, and collaborate for a safer
            future. Unlock the mysteries of nature's fury. Together, let's build
            a more secure and resilient world.
          </Typography>

          <Grid container spacing={2} mt={1}>
            <Grid item xs={6}>
              {data.slice(0, Math.ceil(data.length / 2)).map((item) => (
                <Grid
                  key={item.id}
                  display="flex"
                  justifyContent={"sart"}
                  alignItems={"center"}
                >
                  <ArrowForwardIcon sx={{ color: "green" }} />
                  <Typography variant="h6" color="text.secondary">
                    {item.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={6}>
              {data.slice(Math.ceil(data.length / 2)).map((item) => (
                <Grid key={item.id} display="flex">
                  <ArrowForwardIcon sx={{ color: "green" }} />
                  <Typography variant="h6" color="text.secondary">
                    {item.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 3, padding: 1 }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
      <Services />
      <News />
    </Grid>
  );
};

export default Home;
