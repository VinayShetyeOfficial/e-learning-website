import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > window.innerHeight ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={assets.logo} alt="website_logo" className="logo" />
      <ul className={mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-210} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-100} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} offset={-210} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-210} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className="btn"
            to="contact"
            smooth={true}
            offset={-210}
            duration={500}
          >
            Contacts
          </Link>
        </li>
      </ul>
      <img src={assets.menu_icon} alt="menu_icon" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
