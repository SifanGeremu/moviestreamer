import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../style/Home.css"

function Home() {
  const [Searchquery, setSearchquery] = useState("");

  const movies = [
    { id: 1, title: "john wick1", release_date: "1999" },
    { id: 2, title: "the matrix", release_date: "2000" },
    { id: 3, title: "terminator", release_date: "1990" },
    { id: 4, title: "john wick2", release_date: "2017" },
  ];

  
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(Searchquery.toLowerCase())
  );

  return (
    <div className="home">
      <form onSubmit={(e) => e.preventDefault()} className="search-form">
        <input
          type="text"
          placeholder="search for movies"
          className="search-input"
          value={Searchquery}
          onChange={(e) => setSearchquery(e.target.value)}
        />
        <button type="submit" className="search-button">search</button>
      </form>

      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <p>No movies found </p>
        )}
      </div>
    </div>
  );
}

export default Home;
