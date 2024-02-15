import { useState } from "react";

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
                    <div className="record-item" key={index}>
                    {result.cover_image && <img src={result.cover_image} alt={result.title || 'Unknown Title'} />}
                    <h3>{result.title || 'Unknown Title'}</h3>
                    {result.artist && <p>Artist: {result.artist}</p>}
                    {result.year && <p>Year: {result.year}</p>}
                    {result.genre && <p>Genre: {result.genre.join(', ')}</p>}
                    {result.style && <p>Style: {result.style.join(', ')}</p>}
                    {result.format && <p>Format: {result.format.join(', ')}</p>}
                    {result.label && <p>Label: {result.label.join(', ')}</p>}
                    {result.country && <p>Country: {result.country}</p>}
                    {result.barcode && <p>Barcode: {result.barcode}</p>}
                   {/* Include additional properties as necessary */}
              </div>
                ))}
            </div>
        </>
    );
}

export default SearchBar;
