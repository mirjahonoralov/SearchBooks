//  ---- key ---- AIzaSyASoeC2YIEVyNH3MGURPUFEl9yS7njId-4
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import BooksContent from "./books/BooksContent";
import "./styles/style.css";
import "./styles/media.css";

const SearchBooks = () => {
  const [name, setName] = useState({ items: [] });
  const [searchName, setSearchName] = useState("");
  const [inputError, setInputError] = useState("");
  const [classError, setClassError] = useState("");
  const [nodDataStyle, setNoDataStyle] = useState("noDataStyle");

  const searchingBooks = (findingName) => {
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

  return (
    <div className="container">
      <div className={`content ${nodDataStyle}`}>
        <div className="title">
          <h1>Search </h1>
          <h2>Books</h2>
        </div>
        <div style={{ padding: 10 }}>
          <SearchBar searchingBooks={searchingBooks} />
          <p className={classError}>{inputError}</p>
        </div>
        <BooksContent name={name} />
      </div>
    </div>
  );
};

export default SearchBooks;
