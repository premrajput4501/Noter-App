import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  const date = new Date();
  const currentTime= date.toLocaleDateString();

  return (
    <div className="note">
      <h1 contentEditable={true}>{props.title}</h1>
      <hr />
      <p contentEditable={true}>{props.content}</p>
      <p className="time-created">Created on: {currentTime}</p>
      <button className="delete-btn" onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
