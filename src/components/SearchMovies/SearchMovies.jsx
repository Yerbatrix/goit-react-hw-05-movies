import React, { useState } from 'react';
import axios from 'axios';
import API_KEY from '../../config';
import css from './SearchMovies.module.css';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async query => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.log('Error searching movies', error);
    }
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search desired movies"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
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
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>Popularity: {movie.popularity}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMovies;
