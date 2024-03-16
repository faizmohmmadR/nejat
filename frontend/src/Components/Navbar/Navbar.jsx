import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@mui/material";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ padding: { xs: "10px", md: "20px" } }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h4" component="div" sx={{ color: "#86B817" }}>
              Nejat
            </Typography>
          </Grid>
          <Grid item>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                "&:hover": {
                  color: "#86B817",
                  background: "none",
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{
                "&:hover": {
                  color: "#86B817",
                  background: "none",
                  border: "0.5px solid green",
                  borderWidth: "3px",
                  borderRight: "none",
                  borderLeft: "none",
                  borderTop: "none",
                },
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/service"
              sx={{
                "&:hover": {
                  color: "#86B817",
                  background: "none",
                  border: "0.5px solid green",

                  borderRight: "none",
                  borderLeft: "none",
                  borderTop: "none",
                },
              }}
            >
              Services
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              sx={{
                "&:hover": {
                  color: "#86B817",
                  background: "none",
                  border: "0.5px solid green",
                  borderWidth: "3px",
                  borderRight: "none",
                  borderLeft: "none",
                  borderTop: "none",
                },
              }}
            >
              Contact
            </Button>
            <Button
              color="inherit"
              sx={{
                backgroundColor: "green",
                borderRadius: "22px",
                padding: "7px 23px",
                marginLeft: { xs: "10px", md: "30px" },
                "&:hover": {
                  backgroundColor: "green",
                },
              }}
            >
              Register
            </Button>
            <Button
              color="inherit"
              sx={{
                backgroundColor: "green",
                borderRadius: "22px",
                padding: "7px 23px",
                marginLeft: { xs: "10px", md: "30px" },
                "&:hover": {
                  backgroundColor: "green",
                },
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
