import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      maxWidth="xl"
      margin="80px 0px"
      gap={1}
      justifyContent="center"
    >
      <Grid
        item
        xs={12}
        md={5.9}
        component="img"
        src="../../../../static/images/contact.jpg"
        sx={{
          borderRadius: "10px",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        md={5.9}
        sx={{
          boxShadow: "0px 0px 5px #333",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Typography
          variant="h5"
          style={{ textAlign: "center", padding: "0px 10px" }}
        >
          {t("contact:title")}
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          color="textsecondry"
          component="p"
          mt={3}
        >
          {t("contact:description")}
        </Typography>
        <form action="">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                label={t("contact:firstNameLabel")}
                placeholder={t("contact:firstNamePlaceholder")}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={t("contact:lastNameLabel")}
                placeholder={t("contact:lastNamePlaceholder")}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t("contact:emailLabel")}
                placeholder={t("contact:emailPlaceholder")}
                variant="outlined"
                type="email"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t("contact:phoneLabel")}
                placeholder={t("contact:phonePlaceholder")}
                variant="outlined"
                type="phone"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t("contact:messageLabel")}
                placeholder={t("contact:messagePlaceholder")}
                variant="outlined"
                type="message"
                multiline
                rows={5}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="success"
                variant="contained"
                type="submit"
                sx={{ mb: 3 }}
              >
                {t("contact:submitButton")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Contact;
