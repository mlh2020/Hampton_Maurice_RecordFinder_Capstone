function SearchResultItem({ result }) {
  return (
      <div className="record-item">
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
      </div>
  );
}

export default SearchResultItem;
