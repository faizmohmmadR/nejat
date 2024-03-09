import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import myimage from "../image/hot-line-contact-us-call-center-search-interface.jpg";

function Contact() {
  return (
    <Grid
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        gap: "20px",
      }}
    >
      <Grid className="image">
        <img
          src={myimage}
          alt=""
          style={{ width: "100%", height: "auto", marginTop: "140px" }}
        />
      </Grid>
      <Grid className="form" style={{ width: "300rem", marginTop: "90px" }}>
        <Card
          style={{
            margin: "0 auto",
            padding: "20px 5px",
            width: "100%",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              style={{ textAlign: "center", padding: "24px 0" }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="textsecondry"
              component="p"
            >
              Fill up the form and our team will get back to you within 24
              hours.
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
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
export default Contact;
