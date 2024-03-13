import React from "react";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Link,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [username, setusername] = useState();
  const [password, setPassword] = useState();
  const [email, setemail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [usernameError, setusernamError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [EmailError, setEmailError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const handleEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/;
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!email.match(emailRegex)) {
      setEmailError("Invalid email format");
      return;
    }

    setEmailError(false);
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
  const handleConfirmPassword = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords dose not match");
      return;
    }

    setConfirmPasswordError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null);

    if (!username && !email && !password && !confirmPassword) {
      setFormValid("All fields are required");
      return;
    }
    if (username && !email && !password && !confirmPassword) {
      setFormValid("email,password,confirmPassword fields are required");
      return;
    }
    if (username && email && !password && !confirmPassword) {
      setFormValid("password and confirmPassword fields are required");
      return;
    }
    if (username && email && password && !confirmPassword) {
      setFormValid("confirmPassword field is required");
      return;
    }

    if (usernameError || !username) {
      setFormValid(usernameError);
      return;
    }
    if (EmailError || !email) {
      setFormValid(EmailError);
      return;
    }
    if (passwordError || !password) {
      setFormValid(passwordError);
      return;
    }
    if (password !== confirmPassword) {
      setFormValid("Passwords dose not match");
      return;
    }

    setFormValid(null);
    setSuccess("You are Register successfully");
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ width: "100%", height: "100vh", bgcolor: "#616263" }}
    >
      <Grid item xs={11} md={5} sm={10} mt={6}>
        <Paper sx={{ padding: "20px" }}>
          <Grid textAlign={"center"}>
            <Avatar sx={{ margin: "0px auto", marginTop: "1em" }} />
            <Typography variant="h5" pt={2}>
              User Register
            </Typography>
          </Grid>
          <Grid component="form">
            <Grid display={"flex"} gap={4}>
              <Grid item md={6}>
                {" "}
                <TextField
                  label="UserName"
                  placeholder="Enter username"
                  variant="standard"
                  margin="normal"
                  fullWidth
                  required
                  id="username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  error={usernameError}
                  onBlur={handleUsername}
                  autoComplete="username"
                />
                <TextField
                  label="Email"
                  placeholder="Enter your Email"
                  variant="standard"
                  type="email"
                  fullWidth
                  required
                  sx={{ mt: 2 }}
                  id="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  error={EmailError}
                  onBlur={handleEmail}
                  autoComplete="email"
                />
              </Grid>

              <Grid item md={6}>
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
                <TextField
                  label="Confirm Password"
                  placeholder="Enter your password again"
                  variant="standard"
                  type={showConfirmPassword ? "text" : "password"}
                  fullWidth
                  required
                  sx={{ mt: 3 }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={confirmPasswordError}
                  onBlur={handleConfirmPassword}
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ mt: 4 }}
              fullWidth
              onClick={handleSubmit}
            >
              Register <HowToRegIcon />
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
                Aliready have account?{" "}
                <Link rel="stylesheet" href="/login">
                  Login Now
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
