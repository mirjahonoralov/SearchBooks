import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Book = ({ item }) => {
  return (
    <div className="book">
      Book name:
      <a href={item.volumeInfo.infoLink} target="_blank" rel="noreferrer">
        {item.volumeInfo.title} <BsFillArrowUpRightCircleFill />
      </a>
      <div className="authors">Author: {item.volumeInfo.authors}</div>
      <a
        className="bookLink"
        href={item.volumeInfo.previewLink}
        target="_blank"
        rel="noreferrer"
      >
        About book
      </a>
    </div>
  );
};

export default Book;
