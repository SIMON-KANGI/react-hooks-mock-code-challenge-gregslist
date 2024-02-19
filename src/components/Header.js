import React, { useState } from "react";
import Search from "./Search";

function Header({handleFilter, handleChange, value}) {
  

  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleFilter={handleFilter} value={value} handleChange={handleChange} />
    </header>
  );
}

export default Header;
