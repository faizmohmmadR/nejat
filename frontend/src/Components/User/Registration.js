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
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom'

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

  const handleEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/;
    if (!email) {
      setEmailError(t("login_Register:email_req"));
      
      return;
    }

    if (!email.match(emailRegex)) {
      setEmailError(t("login_Register:email_inv"));
      return;
    }

    setEmailError(false);
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
  const handleConfirmPassword = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError(t('login_Register:password_mach'));
      return;
    }

    setConfirmPasswordError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null);

    if (!username && !email && !password && !confirmPassword) {
      setFormValid(t("login_Register:all_req"));
      return;
    }
    if (username && !email && !password && !confirmPassword) {
      setFormValid(t("login_Register:3field_req"));
      return;
    }
    if (username && email && !password && !confirmPassword) {
      setFormValid(t("login_Register:2field_req"));
      return;
    }
    if (username && email && password && !confirmPassword) {
      setFormValid(t("login_Register:con_pass"));
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
      setFormValid(t('login_Register:password_mach'));
      return;
    }

    setFormValid(null);
    setSuccess("You are Register successfully");
  };
  const { t } = useTranslation();

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
              {t("login_Register:register_page")}
            </Typography>
          </Grid>
          <Grid component="form">
            <Grid display={"flex"} gap={4}>
              <Grid item md={6}>
                {" "}
                <TextField
                  label="UserName"
                  placeholder={t("login_Register:username")}
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
                  placeholder={t("login_Register:email")}
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
                <TextField
                  label="Confirm Password"
                  placeholder={t("login_Register:conferm_password")}
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
              {t("login_Register:register")} <HowToRegIcon />
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
            <Grid container  sx={{ justifyContent:"center" }}>
              <Typography >
                {t("login_Register:des2")}{" "}
              </Typography>
              <Typography sx={{m:"0px 10px"}}>
              <Link rel="stylesheet" to="/login">
                  {t("login_Register:login")}
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
