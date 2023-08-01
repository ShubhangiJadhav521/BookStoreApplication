import react, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import "../Components/style.css";
const Main = () => {
  const [search, setSearch] = useState("abdul kalam");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    // if(evt.key==="Enter")
    // {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
          "&maxResults=40"
      )
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => console.log("err", err));
    // }
  };
  useEffect(() => {
    searchBook();
  }, []);

  return (
    <>
      <div className="header-main" name="main">
        <div className="row1">
          <h3>Find Your Book</h3>
        </div>
        <div className="row2">
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button onClick={searchBook}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="h4">
        <h4>YOUR SEARCH RESULT</h4>
      </div>
      <div className="container-card">{<Card book={bookData} />}</div>
    </>
  );
};
export default Main;
