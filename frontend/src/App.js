import React from "react";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/contact";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
