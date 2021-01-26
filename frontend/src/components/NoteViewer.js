import React, { useState } from "react";
import NoteEditor from "./NoteEditor";

function NoteViewer({ title, body}) {

  const [showEditForm, setShowEditForm] = useState(false)

  function handleClick() {
    setShowEditForm(!false)
  }

  if (showEditForm === true) {
    return <NoteEditor />
  } 

  return (
    <>
      <NoteEditor title={title} body={body} />
      <h2>Title: {title} </h2>
      <p>Body: {body} </p>
      <button onClick={handleClick} >Edit</button>
    </>
  );
}

export default NoteViewer;
