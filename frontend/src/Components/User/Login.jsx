import React from "react";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import Alert from "@mui/material/Alert";

import {
  Avatar,
  Button,
  Checkbox,
  Grid,
  Paper,
  Link,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [username, setusername] = useState();
  const [password, setPassword] = useState();
  const [rememberMe, setRememberMe] = useState();

  const [usernameError, setusernamError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  const handleUsername = () => {
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!username) {
      setusernamError("Username is required");
    } else if (username.length < 2) {
      setusernamError("Username must be at least 5 characters long");
    } else if (username.length > 20) {
      setusernamError("Username must not exceed 20 characters");
    } else if (!username.match(usernameRegex)) {
      setusernamError(
        "Username can only contain letters, numbers, and underscores"
      );
    } else {
      setusernamError(false);
      setpasswordError(false);
    }
  };
  const handlePassword = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    if (!password) {
      setpasswordError("Password is required");
      return;
    }

    if (password.length < 8) {
      setpasswordError("Password must be at least 8 characters long");
      return;
    }

    if (password.length > 16) {
      setpasswordError("Password must be at most 20 characters long");
      return;
    }

    if (!password.match(passwordRegex)) {
      setpasswordError(
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
      );
      return;
    }

    setpasswordError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null);
    if (!username && !password) {
      setFormValid("All fields are required");
      return;
    }

    if (!username && password) {
      setFormValid("User name is required");
      return;
    }

    if (usernameError || !username) {
      setFormValid(usernameError);
      return;
    }
    if (passwordError || !password) {
      setFormValid(passwordError);
      return;
    }

    setFormValid(null);
    setSuccess("You are logging in successfully");
    console.log("User name: " + username);
    console.log("Password: " + password);
    console.log("Remember User: " + rememberMe);
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ width: "100vw", height: "100vh", bgcolor: "#616263" }}
    >
      <Grid item lg={5} mt={6}>
        <Paper sx={{ padding: "20px" }}>
          <Grid textAlign={"center"}>
            <Avatar sx={{ margin: "0px auto" }} />
            <Typography variant="h5" mt={1}>
              Login Page
            </Typography>
          </Grid>
          <Grid component="form" id="loginForm">
            <TextField
              label="UserName"
              id="username"
              placeholder="Enter username"
              variant="standard"
              margin="normal"
              fullWidth
              required
              value={username}
              onChange={(e) => setusername(e.target.value)}
              error={usernameError}
              onBlur={handleUsername}
              autoComplete="username"
            />
            <TextField
              label="password"
              placeholder="Enter your password"
              variant="standard"
              type={showPassword ? "text" : "password"}
              fullWidth
              required
              sx={{ mt: 2 }}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              onBlur={handlePassword}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography mt={2}>
              <Checkbox
                onChange={(event) => setRememberMe(event.target.checked)}
                inputProps={{ "aria-label": "controlled" }}
                id="rememberMe"
              />
              Remember Me
            </Typography>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ mt: 2 }}
              fullWidth
              onClick={handleSubmit}
            >
              Sign in
              <LoginIcon />
            </Button>
            <Typography mt={1}>
              {formValid && (
                <Typography>
                  <Alert severity="error">{formValid}</Alert>
                </Typography>
              )}
            </Typography>
            <Typography>
              {success && (
                <Typography>
                  <Alert severity="success">{success}</Alert>
                </Typography>
              )}
            </Typography>
            <Grid>
              <Typography textAlign={"center"} sx={{ mt: "10px" }}>
                Do you don't have account{" "}
                <Link rel="stylesheet" href="/register">
                  Register Now
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
