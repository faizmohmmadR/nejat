import { Grid, Typography, Container, Box, Divider } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const PopulerEvent = () => {
  const StyledImage = styled("img")({
    width: "90%",
    height: "90%",
  });

  return (
    <Container style={{ marginBottom: "30px" }} marginBottom={6}>
      <Grid item xs={12} md={12} textAlign={"center"} mt={6} marginBottom={6}>
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
            populer Events
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
          our services
        </Typography>
      </Grid>

      <Grid container spacing={3} ClassName="container">
        <Grid item lg={7} md={6}>
          <Grid container spacing={3}>
            <Grid
              item
              lg={12}
              md={12}
              data-wow-delay="0.1s"
              sx={{
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  objectFit: "cover",
                },
                position: "relative",
              }}
            >
              <StyledImage src="img/pexels-ahmed-akacha-6471684.jpg" alt="" />
              <Box
                sx={{
                  backgroundColor: "white",
                  color: "red",
                  fontWeight: "bold",
                  position: "absolute",
                  top: 0,
                  start: 0,
                  margin: "2rem",
                  padding: "0.5rem 1rem",
                }}
              >
                20 people
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  color: "primary.main",
                  fontWeight: "bold",
                  position: "absolute",
                  bottom: "3rem",
                  right: "4rem",
                  margin: "1rem",
                  padding: "0.5rem 1rem",
                }}
              >
                Kandahar
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              md={12}
              data-wow-delay="0.3s"
              sx={{
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                position: "relative",
              }}
            >
              <StyledImage
                src="img/pexels-david-henry-5440808.jpg"
                alt=""
                style={{ height: "70%" }}
              />
              <Box
                sx={{
                  backgroundColor: "white",
                  color: "red",
                  fontWeight: "bold",
                  position: "absolute",
                  top: 0,
                  start: 0,
                  margin: "2rem",
                  padding: "0.5rem 1rem",
                }}
              >
                25 people
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  color: "primary.main",
                  fontWeight: "bold",
                  position: "absolute",
                  bottom: "8rem",
                  right: "2rem",
                  margin: "1rem",
                  padding: "0.5rem 1rem",
                }}
              >
                Helmand
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              md={12}
              data-wow-delay="0.5s"
              sx={{
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                position: "relative",
              }}
            >
              <StyledImage
                src="img/pexels-ridzuan-ibrahim-9739131.jpg"
                alt=""
                style={{ height: "70%" }}
              />
              <Box
                sx={{
                  backgroundColor: "white",
                  color: "red",
                  fontWeight: "bold",
                  position: "absolute",
                  top: 0,
                  start: 0,
                  margin: "2rem",
                  padding: "0.5rem 1rem",
                }}
              >
                23 people
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  color: "primary.main",
                  fontWeight: "bold",
                  position: "absolute",
                  bottom: "8rem",
                  right: "2rem",
                  margin: "1rem",
                  padding: "0.5rem 1rem",
                }}
              >
                Kabul
              </Box>
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
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.1)",
            },
            position: "relative",
          }}
        >
          <StyledImage
            src="img/pexels-алесь-усцінаў-11734705.jpg"
            alt=""
            style={{ height: "86%" }}
          />
          <Box
            sx={{
              backgroundColor: "white",
              color: "red",
              fontWeight: "bold",
              position: "absolute",
              top: 0,
              start: 0,
              margin: "2rem",
              padding: "0.5rem 1rem",
            }}
          >
            14 people
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              color: "primary.main",
              fontWeight: "bold",
              position: "absolute",
              bottom: "8rem",
              right: "3rem",
              margin: "1rem",
              padding: "0.5rem 1rem",
            }}
          >
            Badakhshan
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PopulerEvent;
