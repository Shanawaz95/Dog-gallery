import React from "react";
import "./SearchBar.css";

function SearchBar({ change }) {
  return (
    <div className="search-wrapper">
      <input
        className="search-inp"
        type="text"
        placeholder="Type here to filter by breed"
        onChange={change}
      ></input>
    </div>
  );
}

export default SearchBar;
