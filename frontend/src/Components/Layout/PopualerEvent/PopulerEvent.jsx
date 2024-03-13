import { Grid, Typography, Container, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const PopulerEvent = () => {
  const StyledImage = styled("img")({
    objectFit: "cover",
    width: "100%",
    height: "100%",
  });

  return (
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
                  transform: "scale(0.9,0.9)",
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
                  bottom: 0,
                  end: 0,
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
                transition: "all 1s",
                ":hover": {
                  transform: "scale(0.9,0.9)",
                },
                objectFit: "cover",
                position: "relative",
              }}
            >
              <StyledImage src="img/pexels-david-henry-5440808.jpg" alt="" />
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
                  bottom: 0,
                  end: 0,
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
                transition: "all 1s",
                ":hover": {
                  transform: "scale(0.9,0.9)",
                },
                position: "relative",
              }}
            >
              <StyledImage
                src="img/pexels-ridzuan-ibrahim-9739131.jpg"
                alt=""
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
                  bottom: 0,
                  end: 0,
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
            transition: "all 1s",
            ":hover": {
              transform: "scale(0.9,0.9)",
            },
            position: "relative",
          }}
        >
          <StyledImage src="img/pexels-алесь-усцінаў-11734705.jpg" alt="" />
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
              bottom: 0,
              end: 0,
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
