import React, { useEffect, useState } from "react";
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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navLinkStyle = {
  color: "white",
  fontWeight: "bolder",
  fontSize: "1em",
  textDecoration: "none",
  textTransform: "capitalize",
};

const MobilenavLinkStyle = {
  color: "gray",
  fontWeight: "bolder",
  fontSize: "1.5em",
  textDecoration: "none",
};

const Language = [
  { code: "en", lang: "English" },
  { code: "fa", lang: "Dari" },
  { code: "ps", lang: "Pashto" },
];

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [langEl, setLangEl] = useState(null);
  const [lang, setLang] = useState("English");
  const { i18n } = useTranslation();
  const handleOpenLangMenu = (e) => {
    setLangEl(e.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setLangEl(false);
  };
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (languageCode) => {
    i18n.changeLanguage(languageCode);
    handleCloseLangMenu();
  };

  useEffect(() => {
    console.log(i18n.dir());
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const { t } = useTranslation();

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
            <Button>
              <NavLink to="/" style={navLinkStyle}>
                {t("nav:home")}
              </NavLink>
            </Button>
          </ListItem>

          <ListItem color="white">
            {" "}
            <Button>
              <NavLink to="/about" style={navLinkStyle}>
                {t("nav:about")}
              </NavLink>
            </Button>
          </ListItem>
          <ListItem>
            {" "}
            <Button>
              <NavLink to="/contact" style={navLinkStyle}>
                {t("nav:contact")}
              </NavLink>
            </Button>
          </ListItem>
          <ListItem>
            {" "}
            <Button>
              <NavLink to="/events" style={navLinkStyle}>
                {t("nav:events")}
              </NavLink>
            </Button>
          </ListItem>
          <ListItem>
            <MenuItem>
              <Button
                endIcon={<ArrowDropDownIcon fontSize="2rem" />}
                style={navLinkStyle}
                onClick={handleOpenLangMenu}
              >
                {t("nav:language")}
              </Button>
              <Menu
                anchorEl={langEl}
                open={Boolean(langEl)}
                onClose={handleCloseLangMenu}
              >
                {Language.map((language) => (
                  <MenuItem
                    key={language.code}
                    onClick={(e) => {
                      setLang(language.lang);
                      handleLanguageSelect(language.code);
                    }}
                  >
                    {language.lang}
                  </MenuItem>
                ))}
              </Menu>
            </MenuItem>
          </ListItem>
        </Grid>
        <Grid item sm={1} textAlign={"end"}>
          <ListItem>
            <Button>
              <NavLink style={navLinkStyle} to="/login">
                {t("nav:login")}
              </NavLink>
            </Button>
          </ListItem>
        </Grid>
      </Grid>

      <Grid
        container
        color={"white"}
        padding="0px 10px"
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
