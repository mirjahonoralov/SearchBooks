//  ---- key ---- AIzaSyASoeC2YIEVyNH3MGURPUFEl9yS7njId-4
import React from "react";
import "./styles/style.scss";
import "./styles/media.scss";
import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";
import { FcSearch } from "react-icons/fc";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const SearchBooks = () => {
  const [name, setName] = useState({ items: [] });
  const [findingName, setFindingName] = useState("");
  const [searchName, setSearchName] = useState("");
  const [inputError, setInputError] = useState("");
  const [classError, setClassError] = useState("");
  const [nodDataStyle, setNoDataStyle] = useState("noDataStyle");
  const handleClick = () => {
    if (findingName !== "") setSearchName(findingName);
    else if (findingName === "") setInputError("*Plase enter the book's name");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (findingName === "") {
      setInputError("*Plase enter the book's name");
      setClassError("error");
    }
    if (findingName !== "") {
      setSearchName(findingName);
      setInputError("");
      setClassError("");
    }
  };
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchName}&AIzaSyASoeC2YIEVyNH3MGURPUFEl9yS7njId-4`
      )
      .then((res) => {
        if (res.data.items === undefined) {
          setClassError("error");
          setInputError("*Book was not found");
          return 0;
        }
        setName(res.data);
        setNoDataStyle("");
      });
  }, [searchName]);
  const defaultImg = require("./defaultImg.png").default;

  return (
    <div className="container">
      <div className={`content ${nodDataStyle}`}>
        <div className="title">
          <h1>Search </h1>
          <h2>Books</h2>
        </div>
        <div className="formError">
          <form onSubmit={(e) => handleSubmit(e)} className="searchBar">
            <FcSearch />
            <input
              type="search"
              placeholder="Enter book's name"
              onChange={(e) => setFindingName(e.target.value)}
              value={findingName}
            />
            <button onClick={() => handleClick()}>search</button>
          </form>
          <p className={classError}>{inputError}</p>
        </div>
        <div className="searchContent">
          {name.items.map((item) => (
            <div className="books">
              <img
                src={
                  item.volumeInfo.imageLinks
                    ? item.volumeInfo.imageLinks.thumbnail
                    : defaultImg
                }
                alt="bookImage not found"
              />
              <div className="book">
                <a href={item.volumeInfo.infoLink} target="_blank">
                  {item.volumeInfo.title} <BsFillArrowUpRightCircleFill />
                </a>
                <div className="authors">Author: {item.volumeInfo.authors}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBooks;
