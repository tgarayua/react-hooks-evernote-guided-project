import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, getClickedNote, handleNewClick }) {
  // let noteList = []
  // if (notes) {
    const noteList = notes.map((note) => {
      return (
        <NoteItem
          key={note.id}
          noteTitle={note.title}
          noteBody={note.body}
          getClickedNote={getClickedNote}
        />
      );
    });
  // }

  return <ul>{noteList}</ul>;
}

export default NoteList;
