import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const Notfound = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        width: "100vw",
        height: { xs: "80vh", sm: "100vh", md: "100vh" },

        alignItems: "center",
      }}
    >
      <Grid item xs={12} sm={8} md={7} sx={{ textAlign: "center" }}>
        <Typography
          variant="normal"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "100px", sm: "250px", md: "250px" },
            textTransform: "capitalize",
            fontFamily: "fantasy",
            backgroundImage: `url('img/d.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          oops!
        </Typography>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            fontSize: { xs: "10px", md: "15px" },
            textAlign: "center",
            p: "0em 10em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            404 - page not found
          </Typography>
          <Typography
            variant="h7"
            sx={{ fontWeight: "bold", m: "1em 0", fontFamily: "sans-serif" }}
          >
            The page ypu are looking for might have been removed had its name
            changhed or is temporarily unavailable.
          </Typography>
        </Grid>
        <Button
          variant="contained"
          sx={{
            mb: 2,
            width: { xs: "30%", sm: "25%", md: "25%" },
            bgcolor: "#7814c9",
            fontSize: { xs: "8px" },
            ":hover": { bgcolor: "#a141f0" },
          }}
        >
          go to homepage
        </Button>
      </Grid>
    </Grid>
  );
};

export default Notfound;
