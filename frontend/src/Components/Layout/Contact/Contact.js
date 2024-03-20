import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
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
          Contact Us
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          color="textsecondry"
          component="p"
          mt={3}
        >
          Fill up the form and our team will get back to you within 24 hours.
        </Typography>
        <form action="">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                placeholder="Enter your firstname"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                placeholder="Enter your Lastname"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                placeholder="Enter your Email"
                variant="outlined"
                type="email"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                placeholder="Enter your Phone Number"
                variant="outlined"
                type="phone"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                placeholder="Type your Message"
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
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Contact;
