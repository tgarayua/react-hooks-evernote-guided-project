import React from "react";

function NoteEditor({ title, body }) {
  return (
    <form className="note-editor">
      <input type="text" name="title" value={title} />
      <textarea name="body" value={body} />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
