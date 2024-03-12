import { Box, Button, Grid, Typography, Container } from "@mui/material";
import React from "react";
import Services from "../Services/Services";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/system";
import "../Home/home.css";

const Home = () => {
  const data = [
    { id: 1, title: " Rapid Aid" },
    { id: 2, title: "Efficient Support" },
    { id: 3, title: "Safe Evacuations" },
    { id: 4, title: "Shelter Provision" },
    { id: 5, title: "Life-saving Missions" },
    { id: 6, title: "Risk Reduction" },
  ];
  const StyledImage = styled("img")({
    objectFit: "cover",
    width: "100%",
    height: "100%",
  });

  return (
    <Grid sx={{ margin: "0px auto" }} maxWidth="xl">
      <Grid
        container
        height="100vh"
        sx={{
          background: (theme) =>
            `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('img/d.jpg')`,
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

      <Container style={{ marginBottom: "30px" }}>
        <Typography
          marginTop={5}
          variant="normal"
          style={{
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            color: "#86b817",
            textAlign: "center",
          }}
        >
          popular Events
        </Typography>
        <Typography
          marginBottom={5}
          variant="h4"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Ouer Services
        </Typography>

        <Grid container spacing={3} ClassName="container">
          <Grid item lg={7} md={6}>
            <Grid container spacing={3}>
              <Grid
                item
                lg={12}
                md={12}
                data-wow-delay="0.1s"
                sx={{
                  transition: "all 1s",
                  ":hover": {
                    transform: "scale(1.1,1.1)",
                  },
                  position: "relative",
                }}
              >
                <StyledImage src="img/pexels-ahmed-akacha-6471684.jpg" alt="" />
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    top: "10%",
                    left: "10%",

                    color: "red",
                    backgroundColor: "white",
                    fontFamily: "sans-serif",
                    padding: "20px",
                    fontWeight: "bold",
                  }}
                >
                  205 people were killed
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    right: "10%",
                    color: "black",
                    backgroundColor: "white",
                    fontFamily: "sans-serif",
                    padding: "20px",
                    fontWeight: "bold",
                  }}
                >
                  India
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={12}
                data-wow-delay="0.3s"
                sx={{
                  transition: "all 1s",
                  ":hover": {
                    transform: "scale(1.1,1.1)",
                  },
                  position: "relative",
                }}
              >
                <StyledImage src="img/pexels-david-henry-5440808.jpg" alt="" />
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    top: "10%",
                    left: "10%",

                    color: "red",
                    backgroundColor: "white",
                    fontFamily: "sans-serif",
                    padding: "20px",
                    fontWeight: "bold",
                  }}
                >
                  184 people were killed
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    right: "10%",
                    color: "red",
                    backgroundColor: "white",
                    fontFamily: "sans-serif",
                    padding: "20px",
                    fontWeight: "bold",
                  }}
                >
                  pakistan
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={12}
                data-wow-delay="0.5s"
                sx={{
                  transition: "all 1s",
                  ":hover": {
                    transform: "scale(1.1,1.1)",
                  },
                  position: "relative",
                }}
              >
                <StyledImage
                  src="img/pexels-ridzuan-ibrahim-9739131.jpg"
                  alt=""
                />
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    top: "10%",
                    left: "10%",

                    color: "red",
                    backgroundColor: "white",
                    fontFamily: "sans-serif",
                    padding: "20px",
                    fontWeight: "bold",
                  }}
                >
                  484 people were killed
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    right: "10%",
                    color: "black",
                    backgroundColor: "white",
                    fontFamily: "sans-serif",
                    padding: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Canda
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={5}
            md={6}
            data-wow-delay="0.7s"
            style={{ minHeight: "350px" }}
            sx={{
              transition: "all 1s",
              ":hover": {
                transform: "scale(1.1,1.1)",
              },
              position: "relative",
            }}
          >
            <StyledImage src="img/pexels-алесь-усцінаў-11734705.jpg" alt="" />
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                top: "10%",
                left: "10%",

                color: "red",
                backgroundColor: "white",
                fontFamily: "sans-serif",
                padding: "20px",
                fontWeight: "bold",
              }}
            >
              378 people were killed
            </Typography>
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                bottom: "10%",
                right: "10%",
                color: "black",
                backgroundColor: "white",
                fontFamily: "sans-serif",
                padding: "20px",
                fontWeight: "bold",
              }}
            >
              China
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Home;
