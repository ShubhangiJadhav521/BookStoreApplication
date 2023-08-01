import React, { useState } from "react";
import "./Navbar.css";
import logoImg from "./image/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <a href="/" className="navbar-brand flex">
            <img src={logoImg} alt="site logo" />
            <span className="text-uppercase fw-7 fs-24 ls-1">BOOKHUB</span>
          </a>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="Home"
                smooth
                duration={500}
                className="nav-link text-uppercase text-black fs-22 fw-6 ls-1"
                onClick={() => setToggleMenu(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth
                duration={500}
                className="nav-link text-uppercase text-black fs-22 fw-6 ls-1"
                onClick={() => setToggleMenu(false)}
              >
                Book Quotes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="main"
                className="nav-link text-uppercase text-black fs-22 fw-6 ls-1"
                onClick={() => setToggleMenu(false)}
              >
                Search Books
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
