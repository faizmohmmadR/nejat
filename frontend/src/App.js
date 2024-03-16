import React from "react";
import "./App.css";

import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Footer from "./Components/Layout/Footer/Footer";

import PopulerEvent from "./Components/Layout/PopualerEvent/PopulerEvent";

import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Grid maxWidth="xl" margin="0px auto" container>
      <Navbar />
      <Outlet />
      <Footer />
      <PopulerEvent />
    </Grid>
  );
}

export default App;
