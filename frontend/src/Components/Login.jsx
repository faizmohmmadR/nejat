import React from "react";

import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ width: "100vw", height: "100vh", bgcolor: "#616263" }}
    >
      <Grid item lg={5} mt={7}>
        <Paper sx={{ padding: "20px" }}>
          <Grid textAlign={"center"} pt={2}>
            <Avatar sx={{ margin: "0px auto" }} />
            <Typography variant="h5" pt={1}>
              Login Page
            </Typography>
          </Grid>
          <Grid component="form" padding={1}>
            <TextField
              label="UserName"
              placeholder="Enter username"
              variant="standard"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              variant="standard"
              type="password"
              fullWidth
              required
              sx={{ mt: 3 }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              defaultChecked
              sx={{ mt: 3 }}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ mt: 3 }}
              fullWidth
            >
              Sign in
            </Button>
            <Grid>
              <Typography
                color={"blue"}
                textAlign={"center"}
                sx={{ textDecoration: "underline", mt: "20px" }}
              >
                Do you don't have account | Register Now
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
