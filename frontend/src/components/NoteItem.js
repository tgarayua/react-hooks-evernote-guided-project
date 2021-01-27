import React from "react";
import NoteContainer from "./NoteContainer";

function NoteItem({ note, getClickedNote, noteTitle, noteBody }) {

  function handleClick() {
    const result = getClickedNote(noteTitle, noteBody)
    return result
  }

  return (
    <li onClick={handleClick}>
      <h2>{noteTitle}</h2>
      <p>{noteBody}</p>
    </li>
  );
}

export default NoteItem;
