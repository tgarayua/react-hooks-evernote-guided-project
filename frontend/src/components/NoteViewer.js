import React, { useState } from "react";
import NoteEditor from "./NoteEditor";

function NoteViewer({ title, body}) {

  return (
    <>
      <h2> {title} </h2>
      <p> {body} </p>
      <button >Edit</button>
    </>
  );
}

export default NoteViewer;
