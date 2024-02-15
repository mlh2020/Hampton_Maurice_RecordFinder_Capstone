import { useState } from "react";
import SearchResultItem from './SearchResultItem';

function SearchBar() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const encodedQuery = encodeURIComponent(query);
            const response = await fetch(`http://localhost:3000/search/releases?q=${encodedQuery}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSearchResults(data.results); // Update the state with the results array
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    return (
        <>
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
            <div>
              {searchResults.map((result, index) => (
                  <SearchResultItem key={index} result={result} />
                ))}
            </div>
        </>
    );
}

export default SearchBar;
