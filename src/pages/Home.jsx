import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../config';

export const Home = () => {
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
      <h1>Trending Movies Today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
