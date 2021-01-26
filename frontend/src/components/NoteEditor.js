import React, { useState } from "react";

function NoteEditor({ title, body }) {

  const [editTitle, setEditTitle] = useState("")

  function handleChange(event) {
    setEditTitle(event.target.value)
  }

  return (
    <form className="note-editor">
      <input type="text" name="title" value={title} onChange={handleChange} />
      <textarea name="body" value={body} onChange={handleChange} />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
