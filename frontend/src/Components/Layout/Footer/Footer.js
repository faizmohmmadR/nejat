import React from "react";
import { Grid, Typography, Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
// import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";
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
    fontSize: "15px",
    "&:hover": {
      color: "white",
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
  const { t } = useTranslation();
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
          <Typography style={TitleStyle}>{t("footer:link")}</Typography>
          <Typography style={ContentStyle}>
            <Link href="../Home" style={ElementStyle}>
              {t("footer:home")}
            </Link>
            <Link href="../Contact" style={ElementStyle}>
              {t("footer:contact")}
            </Link>
            <Link href="../About" style={ElementStyle}>
              {t("footer:about")}
            </Link>
            <Link href="../../Events" style={ElementStyle}>
              {t("footer:event")}
            </Link>
            <Link href="../../Information" style={ElementStyle}>
              {t("footer:information")}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5.8} md={2.9}>
          <Typography style={TitleStyle}>
            {t("footer:organizations")}
          </Typography>
          <Typography style={ContentStyle}>
            <Link href="https://dmac.gov.af/da/andma/" style={ElementStyle}>
              {t("footer:org1")}
            </Link>

            <Link href="https://www.andma.gov.af/dr" style={ElementStyle}>
              {t("footer:org2")}
            </Link>
            <Link
              href="https://www.arcs.af/en/disaster-management"
              style={ElementStyle}
            >
              {t("footer:org3")}
            </Link>
            <Link href=" https://www.moph.gov.af/" style={ElementStyle}>
              {t("footer:org4")}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5.8} md={2.9}>
          <Typography style={TitleStyle}>{t("footer:contact_us")}</Typography>
          <Typography style={ContentStyle}>
            <Link
              href="https://www.google.com/maps/place/%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%DB%81+%D9%82%D9%86%D8%AF%DA%BE%D8%A7%D8%B1%E2%80%AD/@31.6322813,65.6999118,17z/data=!4m14!1m7!3m6!1s0x3ed671899cf34771:0x2946be6523a86c78!2z2K_Yp9mG2LTar9in24Eg2YLZhtiv2r7Yp9ix!8m2!3d31.6322768!4d65.6973369!16s%2Fm%2F02wxhcq!3m5!1s0x3ed671899cf34771:0x2946be6523a86c78!8m2!3d31.6322768!4d65.6973369!16s%2Fm%2F02wxhcq?authuser=0&entry=ttu"
              style={ElementStyle}
            >
              {t("footer:location")}
            </Link>
            <Link href="../Contact" style={ElementStyle}>
              {t("footer:message")}
            </Link>
          </Typography>
          <Typography style={TitleStyle}>
            {t("footer:other_sources")}
          </Typography>
          <Typography style={ContentStyle}>
            <Link
              href=" https://help.unhcr.org/ecuador/fa/que-hacer-en-caso-de-desastres-naturales/"
              style={ElementStyle}
            >
              {t("footer:sour1")}
            </Link>
            <Link
              href="https://afghanistankomiteen.no/wp-content/uploads/2020/12/Guideline-for-preparing-communities-against-natural-disasters-.pdf"
              style={ElementStyle}
            >
              {t("footer:sour2")}
            </Link>
            <Link
              href=" https://www.infomigrants.net/prs/tag/%D8%AD%D9%88%D8%A7%D8%AF%D8%AB%20%D8%B7%D8%A8%DB%8C%D8%B9%DB%8C/"
              style={ElementStyle}
            >
              {t("footer:sour3")}
            </Link>
           
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5.8} md={2.9}>
          <Typography style={TitleStyle}>{t("footer:follow")}</Typography>
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
