// Navbar.js

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Ummar Mohammed</h3>
      <nav ref={navRef}>
        <Link to="hero" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About Me
        </Link>
        <Link to="leftSide" smooth={true} duration={500}>
          Stats and Skills
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="email" smooth={true} duration={500}>
          Contact Me
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
