import React from "react";
import Book from "./Book";

const SearchContent = ({ name }) => {
  const defaultImg = require("../../assets/defaultImg.png").default;

  return (
    <div className="searchContent">
      {name.items.map((item, index) => (
        <div className="books" key={index}>
          <img
            src={
              item.volumeInfo.imageLinks
                ? item.volumeInfo.imageLinks.thumbnail
                : defaultImg
            }
            alt="bookImage not found"
          />
          <Book item={item} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
