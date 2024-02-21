// Define the SearchResultItem functional component that takes a prop `result`.
function SearchResultItem({ result }) {
  // Returns the JSX for the SearchResultItem component.
  return (
      // Div container for each search result item with a class name for styling.
      <div className="record-item">
          {/* Conditionally render an img element if the result has a cover_image. 
              The src attribute is set to the cover_image URL, and the alt attribute is 
              set to the title of the result, or 'Unknown Title' if no title is present. */}
          {result.cover_image && <img src={result.cover_image} alt={result.title || 'Unknown Title'} />}
          
          {/* Render a h3 element displaying the title of the result, or 'Unknown Title' if no title is present. */}
          <h3>{result.title || 'Unknown Title'}</h3>
          
          {/* Conditionally render a paragraph element for the artist if present in the result. */}
          {result.artist && <p>Artist: {result.artist}</p>}
          
          {/* Conditionally render a paragraph element for the year if present in the result. */}
          {result.year && <p>Year: {result.year}</p>}
          
          {/* Conditionally render a paragraph element for genre if present in the result.
              If genre is an array, join the elements with a comma and space. */}
          {result.genre && <p>Genre: {result.genre.join(', ')}</p>}
          
          {/* Conditionally render a paragraph element for style if present in the result.
              If style is an array, join the elements with a comma and space. */}
          {result.style && <p>Style: {result.style.join(', ')}</p>}
          
          {/* Conditionally render a paragraph element for format if present in the result.
              If format is an array, join the elements with a comma and space. */}
          {result.format && <p>Format: {result.format.join(', ')}</p>}
          
          {/* Conditionally render a paragraph element for label if present in the result.
              If label is an array, join the elements with a comma and space. */}
          {result.label && <p>Label: {result.label.join(', ')}</p>}
          
          {/* Conditionally render a paragraph element for the country if present in the result. */}
          {result.country && <p>Country: {result.country}</p>}
          
          {/* Conditionally render a paragraph element for the barcode if present in the result. */}
          {result.barcode && <p>Barcode: {result.barcode}</p>}
      </div>
  );
}

// Exports the SearchResultItem component for use in other parts of the application.
export default SearchResultItem;
