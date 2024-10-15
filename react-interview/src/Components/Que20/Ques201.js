import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ques201 = () => {
  const [data, setData] = useState([]);  // Store fetched data
  const [searchTerm, setSearchTerm] = useState('');  // Track search input

  // Fetch data from API on component mount
  async function getData() {
    try {
      const response = await axios.get('https://dummyjson.com/todos?limit=10');
      setData(response.data.todos);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // Toggle the 'completed' status of a todo item
  const handleOnChange = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Delete a todo item
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  // Filter data based on search input
  const filteredData = data.filter((item) =>
    item.todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder='Search item'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.todo}
            <input
              type='checkbox'
              checked={item.completed}
              onChange={() => handleOnChange(item.id)}
            />
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ques201;
