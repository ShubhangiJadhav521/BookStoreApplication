import React from "react";
import Navbar from "./Navbar";
// import SearchForm from "../SearchForm/SearchForm";
import "./Home.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import Main from "./Main";
import { Outlet } from "react-router-dom";
const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  // backgroundSize: 'cover',
  // height: '400px'
  backgroundColor: "red",
};

const fadeImages = [
  {
    url: "./image/library-img.jpg",
    caption: "First Slide",
  },
  {
    url: "./image/library-img.jpg",
    caption: "Second Slide",
  },
  {
    url: "./image/library-img.jpg",
    caption: "Third Slide",
  },
];

const Home = () => {
  return (
    <div className="holder" name="Home">
      <header className="header">
        <Navbar />

        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            "It wasn't until I started reading and found books they wouldn't let
            us read in school that I discovered you could be insane and happy
            and have a good life without being like everybody else." – John
            Waters
          </p>
        </div>

        <Main />
      </header>
    </div>
  );
};

export default Home;
