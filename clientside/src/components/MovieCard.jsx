

function MovieCard({movie}) {
    function onFavoriteclick (){
        alert("you liked it you nailed it");
    }
  return (
    <>
      <div className="movie_card">
        <div className="movie_poster">
          <img src={movie.url} alt={movie.poster} />
        </div>
        <div className="movie_overlay">
          <button className="fav_btn" onClick={onFavoriteclick}>
            🤍
          </button>

        </div>
        <div className='movie_title'>
            <h1>{movie.title}</h1>
            <p>{movie.release_date}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard