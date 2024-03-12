import { Box, Button, Grid, Typography, Container } from "@mui/material";
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
                20 people were killed
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
                Kandahar
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
                18 people were killed
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
                Kabul
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
                48 people were killed
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
                Ghaznai
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
            37 people were killed
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
            Mazara-Shrif
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PopulerEvent;
