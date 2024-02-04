function RecordItem({ record }) {
    // Destructuring potential fields from the record
    const { title, artist, year, genre, style, format, label, country, barcode, cover_image } = record;
  
    return (
      <div className="record-item">
        {cover_image && <img src={cover_image} alt={title} />}
        <h3>{title}</h3>
        {artist && <p>Artist: {artist}</p>}
        {year && <p>Year: {year}</p>}
        {genre && <p>Genre: {genre.join(', ')}</p>} {}
        {style && <p>Style: {style.join(', ')}</p>} {}
        {format && <p>Format: {format.join(', ')}</p>} {}
        {label && <p>Label: {label.join(', ')}</p>} {}
        {country && <p>Country: {country}</p>}
        {barcode && <p>Barcode: {barcode}</p>}
      </div>
    );
  }
  
export default RecordItem;