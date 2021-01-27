import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, getClickedNote, handleNewClick }) {

  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} getClickedNote={getClickedNote} />
      <button onClick={handleNewClick}>New</button>
    </div>
  );
}

export default Sidebar;
