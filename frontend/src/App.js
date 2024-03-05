import React from "react";
import Footer from "./Components/Layout/Footer/Footer";
import "./App.css";
import Navbar from "./Components/Layout/NavBar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
