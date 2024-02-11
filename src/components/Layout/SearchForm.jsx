"use client";

import React from "react"; 

const SearchForm = () => {
  return (
    <>
      <form className="search-box">
        <input
          type="text"
          className="input-search"
          placeholder="Search for anything"
        />
        <button type="submit">
          <i className="flaticon-search"></i>
        </button>
      </form>
    </>
  );
};

export default SearchForm;
