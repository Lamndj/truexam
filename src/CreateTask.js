import React from "react";
import "./CreateTask.css";

function CreateTask({ showCreateMessage }) {
  const handleClick = (e) => {
    e.preventDefault();
    showCreateMessage();
  };
  return (
    <div className="createTask">
      <h3>Create a new task</h3>
      <form>
        <input placeholder="Task Name/ID"></input>
        <textarea placeholder="Editing details..." rows={5}></textarea>
        <input type="file"></input>
        <button onClick={handleClick}>Create</button>
      </form>
    </div>
  );
}

export default CreateTask;
