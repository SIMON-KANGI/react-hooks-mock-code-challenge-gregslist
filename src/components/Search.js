import React from "react";

function Search({value, handleFilter, handleChange}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleFilter}  type="submit">🔍</button>
    </form>
  );
}

export default Search;
