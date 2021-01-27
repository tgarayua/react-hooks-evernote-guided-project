import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

const notesAPI = "http://localhost:3000/api/v1/notes";

function NoteContainer() {
  const [notes, setNotes] = useState();
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [showNewForm, setShowNewForm] = useState(false);
  const [noteSearch, setNoteSearch] = useState("");

  useEffect(() => {
    fetch(notesAPI)
      .then((r) => r.json())
      .then((notes) => {
        setNotes(notes);
      });
  }, []);

  fetch(notesAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "default", body: "placeholder" }),
  })
    .then((response) => response.json())
    .then((data) => data);

  function handleNewClick() {
    setShowNewForm(true);
  }

  function getClickedNote(noteTitle, noteBody) {
    setTitle(noteTitle);
    setBody(noteBody);
  }

  let filteredNotes = [];
  if (notes) {
    filteredNotes = notes.filter((note) => {
      return note.title.toLowerCase().includes(noteSearch.toLowerCase());
    });
    console.log(filteredNotes);
  }

  return (
    <>
      <Search noteSearch={noteSearch} setNoteSearch={setNoteSearch} />
      <div className="container">
        <Sidebar
          notes={filteredNotes}
          getClickedNote={getClickedNote}
          handleNewClick={handleNewClick}
        />
        <Content notes={notes} title={title} body={body} />
      </div>
    </>
  );
}

export default NoteContainer;
