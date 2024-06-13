import React, { useState } from "react";

export const ToDOList = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setNotes([...notes, input]); // Add the new note to the notes array
      setInput(''); // Clear the input field
    }
  };


  const removeTodo = index => {
    const newTodos = [...notes];
    newTodos.splice(index, 1);
    setNotes(newTodos);
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
        {
          notes.map((res, index) => (
            <div key={index}>
              <li>{res}</li>
              <button onClick={() => removeTodo(index)}>Delete</button>
            </div>
          ))
        }
      </ul>
    </div>
  );
};
