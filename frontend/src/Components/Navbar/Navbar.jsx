import React from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toogle_light from "../../assets/night.png";
import toogle_dark from "../../assets/day.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="Navbar">
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt="logo"
        className="logo"
      />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>service</li>
        <li>login</li>
      </ul>
      <div className="Search">
        <input type="text" placeholder="search" />
        <img
          src={theme == "light" ? search_icon_light : search_icon_dark}
          alt=""
          className="search-icon"
        />
      </div>
      <img
        src={theme == "light" ? toogle_light : toogle_dark}
        alt=""
        className="toggle-icon"
        onClick={() => {
          toggle_mode();
        }}
      />
    </div>
  );
};

export default Navbar;
