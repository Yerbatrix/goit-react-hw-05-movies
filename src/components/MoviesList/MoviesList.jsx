import React from 'react';
import css from './MoviesList.module.css';

const MoviesList = ({ searchResults }) => {
  return (
    <ul className={css.movies}>
      {searchResults.map(movie => (
        <li key={movie.id} className={css.movieTile}>
          <div className={css.movieTileContent}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className={css.moviePoster}
            />
            <div className={css.movieInfo}>
              <h2 className={css.title}>{movie.title}</h2>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
