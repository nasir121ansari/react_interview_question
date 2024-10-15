import React, { useState } from "react";

export const ToDOList = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  // Add new note to the list
  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setNotes([...notes, { text: input, completed: false }]); // Add with completed: false
      setInput(""); // Clear input field
    }
  };

  // Remove a todo item from the list
  const removeTodo = (index) => {
    const newTodos = [...notes];
    newTodos.splice(index, 1);
    setNotes(newTodos);
  };

  // Toggle the completed status when checkbox changes
  const handleCheckboxChange = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].completed = !updatedNotes[index].completed; // Toggle completed status
    setNotes(updatedNotes);
  };

  return (
    <div>
      <form onSubmit={handleOnsubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Update input state
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {notes.map((note, index) => (
          <div key={index}>
            <li>{note.text}</li>
            <input
              type="checkbox"
              checked={note.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <span>{note.completed ? "Completed" : "Incomplete"}</span>
            <button onClick={() => removeTodo(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
