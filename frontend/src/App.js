import React from "react";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
