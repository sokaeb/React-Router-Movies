import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = props => {

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
       <Link to={`/movies/${movie.id}`} key={movie.id}>
        <MovieDetails key={movie.id} movie={movie} />
       </Link>
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    // <Link to={`/movies/${movie.id}`} key={movie.id}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
    //  </Link>
  );
}

export default MovieList;

// the <Link> can be wrapped around MovieDetails or the indv movie-card divs inside the MovieDetails function