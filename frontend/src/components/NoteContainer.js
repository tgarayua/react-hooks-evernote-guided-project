import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

const notesAPI = 'http://localhost:3000/api/v1/notes'

function NoteContainer() {

  const [notes, setNotes] = useState([])
  const [body, setBody] = useState("")
  const [title, setTitle] = useState("")

  useEffect(() => {
    fetch(notesAPI)
    .then((r) => r.json())
    .then(notes => {
      setNotes(notes)
    });
  }, []);

  function getClickedNote(noteTitle, noteBody) {
    setTitle(noteTitle)
    setBody(noteBody)
  }

  return (
    <>
      <Search />
      <div className="container">
        <Sidebar notes={notes} getClickedNote={getClickedNote} />
        <Content notes={notes} title={title} body={body} />
      </div>
    </>
  );
}

export default NoteContainer;
