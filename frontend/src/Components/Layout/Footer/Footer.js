import React from "react";
import { Grid, Typography, Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
// import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";

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
    color: "#263d78",
    fontFamily: "serif",
    textDecoration: "none",

    fontSize: "15px",
    "&:hover": {
      textDecoration: "underline",
      color: "blue",
    },
  };
  const IconStyle = {
    marginRight: "12px",
    color: "#0064ff",
    fontSize: "10px",

    "&:hover": {
      color: "white",
      backgroundColor: "blue",
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
      position={"relative"}
      container
      sx={{
        height: "90vh",
        width: "100vw",
        bgcolor: "#f6f6f6",
        borderTop: "2px solid #d5dbde",
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
            <Link style={ElementStyle}>Go to About Page</Link>
            <Link style={ElementStyle}>Mission, Impact, and History</Link>
            <Link style={ElementStyle}>Our Leadership</Link>
            <Link style={ElementStyle}>In the news</Link>
            <Link style={ElementStyle}>Careers</Link>
            <Link style={ElementStyle}>Financial Statment</Link>
          </Typography>
          <Typography style={TitleStyle}>For Media</Typography>
          <Typography style={ContentStyle}>
            <Link style={ElementStyle}>Media Export</Link>
            <Link style={ElementStyle}>Press Releases</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5.8} md={2.9}>
          <Typography style={TitleStyle}>Get Involoved</Typography>
          <Typography style={ContentStyle}>
            <Link style={ElementStyle}>Event</Link>
            <Link style={ElementStyle}>Volunteer</Link>
            <Link style={ElementStyle}>Ways to Give</Link>
            <Link style={ElementStyle}>Become and Advosate</Link>
            <Link style={ElementStyle}>Share Your Story</Link>
            <Link style={ElementStyle}>Sponsors & Supporters</Link>
          </Typography>
          <Typography style={TitleStyle}>Resources</Typography>
          <Typography style={ContentStyle}>
            <Link style={ElementStyle}>Go to About Page</Link>
            <Link style={ElementStyle}>Go to About Page</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5.8} md={2.9}>
          <Typography style={TitleStyle}>Signature Reports</Typography>
          <Typography style={ContentStyle}>
            <Link style={ElementStyle}>State of the Air</Link>
            <Link style={ElementStyle}>State of Lung Concer Report</Link>
            <Link style={ElementStyle}>State of Tobacco Control</Link>
          </Typography>
          <Typography style={TitleStyle}>Contact Us</Typography>
          <Typography style={ContentStyle}>
            <Link style={ElementStyle}>Go to About Page</Link>
            <Link style={ElementStyle}>Go to About Page</Link>
          </Typography>
          <Typography style={TitleStyle}>Professional Education</Typography>
          <Typography style={ContentStyle}>
            <Link style={ElementStyle}>Go to About Page</Link>
            <Link style={ElementStyle}>Go to About Page</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5.8} md={2.9}>
          <Typography style={TitleStyle}>Commeing soon on</Typography>
          <Grid sx={{ mt: "1em", ml: "1em", display: "flex" }}>
            <Link>
              <Avatar sx={IconStyle}>
                <FacebookIcon />
              </Avatar>
            </Link>
            <Link>
              <Avatar sx={IconStyle}>X</Avatar>
            </Link>
            <Link>
              <Avatar sx={IconStyle}>
                <InstagramIcon />
              </Avatar>
            </Link>
            <Link>
              <Avatar sx={IconStyle}>
                <LinkedInIcon />
              </Avatar>
            </Link>
            <Link>
              <Avatar sx={IconStyle}>
                <GitHubIcon />
              </Avatar>
            </Link>
          </Grid>
          <Grid
            item
            component="img"
            mt={8}
            alt="Image placeholder"
            src="../../../../static/images/logo.png"
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
        sx={{
          alignItems: "center",
          textAlign: "center",
          height: "20svh",
          position: "absolute",
          bottom: "0px",
        }}
      >
        <Grid item xs={12} md={5.8}>
          <Typography sx={{ color: "#ffffff" }}>
            <CopyrightIcon sx={{ fontSize: "15px" }} />
            {new Date().getFullYear()} Nejat. All right reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5.8}>
          <Typography sx={{}}>
            <Link style={ButtomFooterStyle}>Terms & Conditions</Link>
            <Link style={ButtomFooterStyle}>Privqcy</Link>
            <Link style={ButtomFooterStyle}>Security</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
