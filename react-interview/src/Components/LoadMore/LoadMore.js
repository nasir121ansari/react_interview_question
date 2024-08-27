import React, { useState, useEffect } from 'react';

export const LoadMore = () => {


    const [firstFact, setFirstFact] = useState(''); 
  const [additionalFacts, setAdditionalFacts] = useState([]); 

  
  const fetchFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      if (!firstFact) {
        setFirstFact(data.fact);
      } else {
        setAdditionalFacts(prevFacts => [...prevFacts, data.fact]);
      }
    } catch (error) {
      console.error('Error fetching fact:', error);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);
  return (
    <div>
      {firstFact && <p>{firstFact}</p>}
      {additionalFacts.map((fact, index) => (
        <p key={index}>{fact}</p>
      ))}
      <button onClick={fetchFact}>Load More</button>
    </div>
  )
}
