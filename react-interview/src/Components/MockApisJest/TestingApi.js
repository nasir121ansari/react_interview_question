import React from 'react'

const TestingApi = () => {
    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return response.json();
    };
  return (
    <div>TestingApi</div>
  )
}

export default TestingApi