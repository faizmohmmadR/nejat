import React, { useState } from "react";
import {
  Button,
  Grid,
  ListItem,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { NavLink } from "react-router-dom";

const navLinkStyle = {
  color: "white",
  fontWeight: "bolder",
  fontSize: "1.5em",
  textDecoration: "none",
};

const MobilenavLinkStyle = {
  color: "gray",
  fontWeight: "bolder",
  fontSize: "1.5em",
  textDecoration: "none",
};

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid
        container
        color={"white"}
        alignItems="center"
        height="12svh"
        padding="0px 10px"
        zIndex={1}
        sx={{
          background: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))",
          position: "sticky",
          top: "0px",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Grid item sm={4} display="flex" alignItems="center">
          <Typography variant="h4">NEJAT</Typography>
        </Grid>
        <Grid item sm={7} display="flex" height="10svh">
          <ListItem>
            <NavLink to="/" style={navLinkStyle}>
              Home
            </NavLink>
          </ListItem>

          <ListItem color="white">
            {" "}
            <NavLink to="/about" style={navLinkStyle}>
              About
            </NavLink>
          </ListItem>
          <ListItem>
            {" "}
            <NavLink to="/contact" style={navLinkStyle}>
              Contact
            </NavLink>
          </ListItem>
          <ListItem>
            {" "}
            <NavLink style={navLinkStyle}>Services</NavLink>
          </ListItem>
        </Grid>
        <Grid item sm={1} textAlign={"end"}>
          <ListItem>
            <NavLink style={navLinkStyle} to="/login">
              Login
            </NavLink>
          </ListItem>
        </Grid>
      </Grid>

      <Grid
        container
        color={"white"}
        height="12svh"
        zIndex={1}
        sx={{
          background: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))",
          position: "sticky",
          top: "0px",
          display: { xs: "block", md: "none" },
          height: { xs: "8svh", sm: "9svh" },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid item sm={4} display="flex" alignItems="center">
            <Typography variant="h4">NEJAT</Typography>
          </Grid>
          <Button sx={{ color: "white" }} onClick={handleOpenMenu}>
            <MenuIcon
              fontSize="large"
              sx={{ display: anchorEl ? "none" : "block" }}
            />
            <ClearIcon
              fontSize="large"
              sx={{ display: anchorEl ? "block" : "none" }}
            />
          </Button>
        </Grid>
      </Grid>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem
          onClick={() => {
            handleCloseMenu();
          }}
          sx={{ width: "100vw" }}
        >
          {" "}
          <NavLink style={MobilenavLinkStyle} to="/">
            Home
          </NavLink>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleCloseMenu();
          }}
          sx={{ width: "100vw" }}
        >
          {" "}
          <NavLink style={MobilenavLinkStyle} to="/about">
            About
          </NavLink>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleCloseMenu();
          }}
          sx={{ width: "100vw" }}
        >
          {" "}
          <NavLink style={MobilenavLinkStyle} to="/contact">
            Contact
          </NavLink>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleCloseMenu();
          }}
          sx={{ width: "100vw" }}
        >
          {" "}
          <NavLink style={MobilenavLinkStyle}>Services</NavLink>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleCloseMenu();
          }}
          sx={{ width: "100vw" }}
        >
          <NavLink style={MobilenavLinkStyle} to="/login">
            Login
          </NavLink>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Nav;
