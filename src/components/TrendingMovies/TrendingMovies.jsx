import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../config';
import css from './TrendngMovies.module.css';

export const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.log('Error fetching trending movies', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending Movies Today</h2>
      <ul className={css.trendingMovies}>
        {trendingMovies.map(movie => (
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
