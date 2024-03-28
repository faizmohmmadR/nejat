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
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
    const usernameRegex = /^[a-zA-Z0-9_\u0600-\u06FF\s]+$/;
    if (!username) {
      setusernamError(t("login_Register:username_req"));
    } else if (username.length < 2) {
      setusernamError(t("login_Register:username_low_lenght"));
    } else if (username.length > 20) {
      setusernamError(t("login_Register:username_height_length"));
    } else if (!username.match(usernameRegex)) {
      setusernamError(t("login_Register:username_content"));
    } else {
      setusernamError(false);
      setpasswordError(false);
    }
  };
  const handlePassword = () => {
    const passwordRegex =
      /^(?=.*[a-zA-Z\u0600-\u06FF])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\u0600-\u06FF\d@$!%*?&]{8,20}$/;

    if (!password) {
      setpasswordError(t("login_Register:password_req"));
      return;
    }

    if (password.length < 8) {
      setpasswordError(t("login_Register:password_low_lenght"));
      return;
    }

    if (password.length > 16) {
      setpasswordError(t("login_Register:password_height_length"));
      return;
    }

    if (!password.match(passwordRegex)) {
      setpasswordError(t("login_Register:passworderror"));
      return;
    }

    setpasswordError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null);
    if (!username && !password) {
      setFormValid(t("login_Register:all_req"));
      return;
    }

    if (!username && password) {
      setFormValid(t("login_Register:username_req"));
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
    setSuccess(t("login_Register:success"));
    console.log("User name: " + username);
    console.log("Password: " + password);
    console.log("Remember User: " + rememberMe);
  };
  const { t } = useTranslation();

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
              {t("login_Register:login_page")}
            </Typography>
          </Grid>
          <Grid component="form" id="loginForm">
            <TextField
              label="UserName"
              id="username"
              placeholder={t("login_Register:username")}
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
              placeholder={t("login_Register:password")}
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
              {t("login_Register:remember")}
            </Typography>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ mt: 2 }}
              fullWidth
              onClick={handleSubmit}
            >
              {t("login_Register:sign_in")}
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
            <Grid container sx={{ justifyContent: "center" }}>
              <Typography>{t("login_Register:des")}</Typography>
              <Typography sx={{ m: "0px 10px" }}>
                <Link rel="stylesheet" to="/register">
                  {t("login_Register:register")}
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
