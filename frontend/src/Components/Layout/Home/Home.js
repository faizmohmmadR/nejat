import { Box, Button, Grid, Typography, Divider } from "@mui/material";
import React from "react";
import Services from "../Services/Services";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import News from "../News/News";
import Charts from "../Charts/Charts";
import { useTranslation } from "react-i18next";

const dividerContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "25%",
  height: { xs: "2vh", md: "3vh" },
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  padding: "3px 0",
};
const Home = () => {
  const data = [
    { id: 1, title: " Rapid Aid" },
    { id: 2, title: "Efficient Support" },
    { id: 3, title: "Safe Evacuations" },
    { id: 4, title: "Shelter Provision" },
    { id: 5, title: "Life-saving Missions" },
    { id: 6, title: "Risk Reduction" },
  ];

  const { t } = useTranslation();
  return (
    <Grid sx={{ margin: "0px auto" }} maxWidth="xl" width={"100%"}>
      <Grid
        container
        sx={{
          background: (theme) =>
            `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('../../../../static/images/d.jpg')`,
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
            {t("home:welcome")}
          </Typography>
          <Typography
            variant="h4"
            color="white"
            width={"70%"}
            margin={"0px auto"}
            mt={5}
            sx={{ fontSize: { xs: "12px", md: "30px" } }}
          >
            {t("home:desc")}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" gap={5} margin={"50px 0px"}>
        <Grid item lg={12} textAlign={"center"} bgcolor={"white"}>
          <Box
            component={"img"}
            src="../../../../static/images/Nejat.png"
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
            backgroundImage: "url(../../../../static/images/flood.jpg)",
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
          bgcolor={"white"}
        >
          <Grid item xs={12} md={12} textAlign={"center"}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: "1em",
              }}
            >
              <Box sx={dividerContainerStyle}>
                <Divider
                  sx={{
                    width: "30%",
                    height: "2px",
                    background: "#7814c9",
                  }}
                />
                <Divider
                  sx={{
                    width: "70%",
                    height: "2px",
                    background: "#7814c9",
                  }}
                />
              </Box>

              <Typography
                variant="normal"
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#7814c9",
                }}
              >
                About Us
              </Typography>
              <Box sx={dividerContainerStyle}>
                <Divider
                  sx={{
                    width: "30%",
                    height: "2px",
                    background: "#7814c9",
                  }}
                />
                <Divider
                  sx={{ width: "70%", height: "2px", background: "#7814c9" }}
                />
              </Box>
            </Grid>
          </Grid>
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
            sx={{
              mt: 4,
              mb: 2,
              padding: "5px 20px",
              zIndex: 0,
              bgcolor: "#7814c9",
              ":hover": { bgcolor: "#a141f0" },
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
      <Services />
      <News />
      <Charts />
    </Grid>
  );
};

export default Home;
