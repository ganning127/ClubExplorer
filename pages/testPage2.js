// In your Next.js page component
import React, { useState } from 'react';

export default function TestSearchPage() {

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // handler for test searchbar onChange() 
  const handleSearch = async (event) => {

    setSearchTerm(event.target.value);

    // reset results if search bar is only whitespace 
    if (event.target.value.trim() === '') {
      setResults([]);
      return;
    }

    const response = await fetch(`/api/searchClubs?searchTerm=${encodeURIComponent(event.target.value)}`);
    const data = await response.json();
    setResults(data);

    console.log(`RESULTS: \n${results}`)
    console.log(`DATA: \n${data}`)
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for clubs..."
      />
      
      <div>
        {/* Map over the results and render them */}
        {results.map((club, index) => (
          <div key={index}>
            {/* Render your club data here */}
            <h2>{club.name}</h2>
            <p>{club.shortDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
