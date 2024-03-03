import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";

function Navbar() {
  const navref = useRef();
  const showNavbar = () => {
    navref.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h1>LOGO</h1>
      <nav ref={navref}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />
      </button>
      <button className="nav-btn " onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
