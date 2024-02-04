import { useState } from "react";

function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSearch = async (event) => {
      event.preventDefault(); // Prevent the form from causing a page reload
      try {
        // Encode the query for use in a URL
        const encodedQuery = encodeURIComponent(query);
        // Make a GET request to your backend endpoint
        const response = await fetch(`http://localhost:3000/search/releases?q=${encodedQuery}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Process the data (e.g., display it in the UI)
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
  
    return (
      <form onSubmit={handleSearch}>
        <label htmlFor="search-query">Search Releases:</label>
        <input
          type="text"
          id="search-query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search term..."
        />
        <button type="submit">Search</button>
      </form>
    );
}

export default SearchBar;