import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Footer from "./Components/Layout/Footer/Footer";
import Nav from "./Components/Layout/Nav/Nav";

function App() {
  return (
    <Grid maxWidth="xl" margin="0px auto" container>
      <Nav />
      <Outlet />
      <Footer />
    </Grid>
  );
}

export default App;
