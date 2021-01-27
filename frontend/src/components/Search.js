import React, { useState } from "react";

function Search({ noteSearch, setNoteSearch }) {

  // const filteredNotes = title.filter((title) => {
  //   return title.includes(titleSearch)
  // })

  function handleOnChange(event) {
    setNoteSearch(event.target.value)
  }

  return (
    <div className="filter">
      <input value={noteSearch} id="search-bar" type="text" placeholder="Search Notes"  onChange={handleOnChange} />
    </div>
  );
}

export default Search;
