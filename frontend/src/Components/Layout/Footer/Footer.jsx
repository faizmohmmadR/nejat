import React from "react";
import { Link, Grid, Typography } from "@mui/material";
// import XIcon from "@mui/icons-material/X";

import {
  FaCopyright,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  const TitleStyle = {
    color: "#102354",
    fontWeight: "bold",
    fontSize: "17px",
    marginLeft: "3em",
  };

  const ContentStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "1em 0em",
    marginLeft: "3em",
  };
  const ElementStyle = {
    textDecoration: "none",
    color: "#263d78",
    fontFamily: "serif",

    fontSize: "15px",
    "&:hover": {
      textDecoration: "underline",
      color: "blue",
    },
  };
  const IconStyle = {
    marginRight: "10px",
    color: "#0064ff",
    fontSize: "28px",

    "&:hover": {
      color: "green",
    },
  };
  const ButtomFooterStyle = {
    textDecoration: "none",
    color: "#ffffff",
    marginLeft: "2em",
    "&:hover": {
      textDecoration: "underline",
    },
  };
  return (
    <Grid
      container
      sx={{
        height: "90vh",
        width: "100vw",
        bgcolor: "#f6f6f6",
        "@media (min-width:280px)": {
          height: "210vh",
        },
        "@media (min-width:768px)": {
          height: "100vh",
        },
      }}
    >
      <Grid
        container
        maxWidth="xl"
        item
        xs={12}
        gap={1}
        sx={{ padding: "2em" }}
      >
        <Grid item xs={12} sm={5.8} md={2.8}>
          <Typography style={TitleStyle}>About Us</Typography>
          <Typography style={ContentStyle}>
            <Link href="#" sx={ElementStyle}>
              Go to About Page
            </Link>
            <Link href="#" sx={ElementStyle}>
              Mission, Impact, and History
            </Link>
            <Link href="#" sx={ElementStyle}>
              Our Leadership
            </Link>
            <Link href="#" sx={ElementStyle}>
              In the news
            </Link>
            <Link href="#" sx={ElementStyle}>
              Careers
            </Link>
            <Link href="#" sx={ElementStyle}>
              Financial Statment
            </Link>
          </Typography>
          <Typography style={TitleStyle}>For Media</Typography>
          <Typography style={ContentStyle}>
            <Link href="#" sx={ElementStyle}>
              Media Export
            </Link>
            <Link href="#" sx={ElementStyle}>
              Press Releases
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5.8} md={2.9}>
          <Typography style={TitleStyle}>Get Involoved</Typography>
          <Typography style={ContentStyle}>
            <Link href="#" sx={ElementStyle}>
              Event
            </Link>
            <Link href="#" sx={ElementStyle}>
              Volunteer
            </Link>
            <Link href="#" sx={ElementStyle}>
              Ways to Give
            </Link>
            <Link href="#" sx={ElementStyle}>
              Become and Advosate
            </Link>
            <Link href="#" sx={ElementStyle}>
              Share Your Story
            </Link>
            <Link href="#" sx={ElementStyle}>
              Sponsors & Supporters
            </Link>
          </Typography>
          <Typography style={TitleStyle}>Resources</Typography>
          <Typography style={ContentStyle}>
            <Link href="#" sx={ElementStyle}>
              Go to About Page
            </Link>
            <Link href="#" sx={ElementStyle}>
              Go to About Page
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5.8} md={2.9}>
          <Typography style={TitleStyle}>Signature Reports</Typography>
          <Typography style={ContentStyle}>
            <Link href="#" sx={ElementStyle}>
              State of the Air
            </Link>
            <Link href="#" sx={ElementStyle}>
              State of Lung Concer Report
            </Link>
            <Link href="#" sx={ElementStyle}>
              State of Tobacco Control
            </Link>
          </Typography>
          <Typography style={TitleStyle}>Contact Us</Typography>
          <Typography style={ContentStyle}>
            <Link href="#" sx={ElementStyle}>
              Go to About Page
            </Link>
            <Link href="#" sx={ElementStyle}>
              Go to About Page
            </Link>
          </Typography>
          <Typography style={TitleStyle}>Professional Education</Typography>
          <Typography style={ContentStyle}>
            <Link href="#" sx={ElementStyle}>
              Go to About Page
            </Link>
            <Link href="#" sx={ElementStyle}>
              Go to About Page
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5.8} md={2.9}>
          <Typography style={TitleStyle}>Commeing soon on</Typography>
          <Typography sx={{ mt: "1em", ml: "3em" }}>
            <Link href="#" sx={IconStyle}>
              <FaInstagramSquare />
            </Link>
            <Link href="#" sx={IconStyle}>
              <FaFacebook />
            </Link>
            <Link href="#" sx={IconStyle}>
              X
            </Link>
            <Link href="#" sx={IconStyle}>
              <FaWhatsappSquare />
            </Link>
            <Link href="#" sx={IconStyle}>
              <FaLinkedin />
            </Link>
          </Typography>
          <Grid
            item
            component="img"
            mt={8}
            alt="Image placeholder"
            src="../img/logo.png"
            title="name"
            xs={11}
            md={12}
          ></Grid>
        </Grid>
      </Grid>
      <Grid
        container
        borderColor={"white"}
        padding={"4px"}
        bgcolor={"#0d2354"}
        sx={{ alignItems: "center", textAlign: "center" }}
      >
        <Grid item xs={12} md={5.8}>
          <Typography sx={{ color: "#ffffff" }}>
            <FaCopyright />
            {new Date().getFullYear()} Nejat. All right reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5.8} sx={{}}>
          <Typography sx={{}}>
            <Link href="#" sx={ButtomFooterStyle}>
              Terms & Conditions
            </Link>
            <Link href="#" sx={ButtomFooterStyle}>
              Privqcy
            </Link>
            <Link href="#" sx={ButtomFooterStyle}>
              Security
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
