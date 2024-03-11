import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(8, "Username must be at least 8 characters")
      .max(16, "Username must be at most 16 characters")
      .matches(
        /^[a-zA-Z0-9]+$/,
        "Username must only contain letters and numbers"
      ),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be at most 16 characters")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
        "Password must contain at least one number and one symbol"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic
      console.log(values);
    },
  });

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
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="username"
              name="username"
              label="Username"
              placeholder="Enter username"
              variant="standard"
              margin="normal"
              fullWidth
              required
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              variant="standard"
              type="email"
              fullWidth
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ mt: 3 }}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              variant="standard"
              type="password"
              fullWidth
              required
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{ mt: 3 }}
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Enter your password again"
              variant="standard"
              type="password"
              fullWidth
              required
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
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
              Already have an account? Login
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
