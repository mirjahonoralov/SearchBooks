import React from "react";
import { useState } from "react/cjs/react.development";
import { FcSearch } from "react-icons/fc";

const SearchBar = ({ searchingBooks }) => {
  const [findingName, setFindingName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchingBooks(findingName);
  };

  return (
    <div>
      <div className="formError">
        <form onSubmit={(e) => handleSubmit(e)} className="searchBar">
          <FcSearch />
          <input
            type="search"
            placeholder="Enter book's name"
            onChange={(e) => setFindingName(e.target.value)}
            value={findingName}
          />
          <button onClick={(e) => handleSubmit(e)}>search</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
