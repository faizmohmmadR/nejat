import React from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Nav from "./Components/Layout/Nav/Nav";

function App() {
  return (
    <Grid maxWidth="xl" margin="0px auto" container>
      <Nav />
      <Outlet />
    </Grid>
  );
}

export default App;
