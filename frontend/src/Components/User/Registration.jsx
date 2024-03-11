import React from "react";

import {
  Avatar,
  Button,
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
              label="Email"
              placeholder="Enter your Email"
              variant="standard"
              type="email"
              fullWidth
              required
              sx={{ mt: 3 }}
            />
            <TextField
              label="password"
              placeholder="Enter your password"
              variant="standard"
              type="password"
              fullWidth
              required
              sx={{ mt: 3 }}
            />
            <TextField
              label="confirm password"
              placeholder="Enter your password again"
              variant="standard"
              type="password"
              fullWidth
              required
              sx={{ mt: 3 }}
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ mt: 3 }}
              fullWidth
            >
              Submit
            </Button>
            <Grid color={"blue"} mt={2} textAlign={"center"}>
              Aliready have account? Login
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
