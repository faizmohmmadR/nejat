import React, { useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Footer from "./Components/Layout/Footer/Footer";

import Navbar from "./Components/Navbar/Navbar";

function App() {
  const current_theme = localStorage.getItem(" current_theme ");

  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem(" current_theme ", theme);
  }, [theme]);

  return (
    <Grid maxWidth="xl" margin="0px auto" container>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>

      <Outlet />
      <Footer />
    </Grid>
  );
}

export default App;
