const ShowsMainData = ({ image, name, rating, summary, genres }) => {
  return (
    <div>
      <img src={image ? image.original : '/not found.png'} alt={name} />

      <div>
        <h1>{name}</h1>
        <div>{rating.average || 'N/A'}</div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
          Genres:
          <div>
            {genres.map(genre => {
              return <span key={genre}>{genre} </span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowsMainData;
