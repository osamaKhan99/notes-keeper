import React from "react";

function Search({ setSearchQuery }) {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search your notes"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
