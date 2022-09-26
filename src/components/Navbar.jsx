import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "white",
    position: "fixed",
    // padding: "5px",
    height: "8%",
    transition: "all 500ms",
  };

  const navbarStyleOnScroll = {
    backgroundColor: "darkcyan",
    height: "8%",
    // padding: "10px",
    transition: "all 500ms",
    position: "fixed",
  };

  const [style, setStyle] = useState(navbarStyle);
  const handleNavStyle = () => {
    if (window.pageYOffset !== 0) {
      setStyle(navbarStyleOnScroll);
    } else {
      setStyle(navbarStyle);
    }
  };

  window.addEventListener("scroll", handleNavStyle);
  return (
    <div id="navbar" style={style}>
      <hr className="navbar-hr" />
      <div className="navbar-logo">
        <p className="navbar-logo-up">MICHELLE</p>
        <p className="navbar-logo-down">ALWAYS SOMETHING SPECIAL</p>
      </div>
      <hr className="navbar-hr" />
    </div>
  );
};

export default Navbar;
