import "../style/MovieCard.css"

function MovieCard({movie}) {
    function onFavoriteclick (){
        alert("you liked it you nailed it");
    }
  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.poster}
          />
        </div>
        <div className="movie-overlay">
          <button className="fav_btn" onClick={onFavoriteclick}>
            🤍
          </button>
        </div>
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard