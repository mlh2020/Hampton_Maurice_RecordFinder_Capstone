// Import useState hook from React to manage component state.
import { useState } from "react";
// Import the SearchResultItem component to display each search result.
import SearchResultItem from './SearchResultItem';

// Define the SearchBar functional component.
function SearchBar() {
    // useState hook to manage the search query state. Initialized with an empty string.
    const [query, setQuery] = useState('');
    // useState hook to manage the search results state. Initialized with an empty array.
    const [searchResults, setSearchResults] = useState([]);

    // Async function to handle the search operation upon form submission.
    const handleSearch = async (event) => {
        // Prevents the default form submission behavior, which refreshes the page.
        event.preventDefault();
        try {
            // Encodes the query string to ensure it's safe to include in a URL.
            const encodedQuery = encodeURIComponent(query);
            // Fetches search results from a local server endpoint using the encoded query.
            const response = await fetch(`http://localhost:3000/search/releases?q=${encodedQuery}`);
            // Checks if the fetch request was unsuccessful.
            if (!response.ok) {
                // Throws an error if the response status is not OK.
                throw new Error('Network response was not ok');
            }
            // Parses the JSON response body and stores it in a variable.
            const data = await response.json();
            // Updates the searchResults state with the results from the response.
            setSearchResults(data.results);
        } catch (error) {
            // Logs any errors to the console if the fetch request fails.
            console.error('Failed to fetch data:', error);
        }
    };

    // Returns the JSX for the SearchBar component.
    return (
        <>
            {/* A form element with an onSubmit event handler to trigger the handleSearch function. */}
            <form onSubmit={handleSearch} className="searchBar">
                {/* Label for the search input field. */}
                <label htmlFor="search-query">Search Releases:</label>
                {/* Text input field for entering the search query. */}
                <input
                    type="text"
                    id="search-query"
                    value={query} // Binds the input value to the query state.
                    onChange={(e) => setQuery(e.target.value)} // Updates the query state as the user types.
                    placeholder="Enter search term..." // Displays placeholder text in the input field.
                />
                {/* Submit button for the search form. */}
                <button type="submit" className="searchButton">Search</button>
            </form>
            {/* Container for displaying search results. */}
            <div>
              {/* Maps over the searchResults array and renders a SearchResultItem for each result. */}
              {searchResults.map((result, index) => (
                  // SearchResultItem component with a unique key and result prop.
                  <SearchResultItem key={index} result={result} />
                ))}
            </div>
        </>
    );
}

// Exports the SearchBar component for use in other parts of the application.
export default SearchBar;
