import React from "react";

function NoteViewer({ title, body}) {
  return (
    <>
      <h2>Title: {title} </h2>
      <p>Body: {body} </p>
      <button>Edit</button>
    </>
  );
}

export default NoteViewer;
