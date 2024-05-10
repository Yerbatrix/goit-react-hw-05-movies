import { useState } from 'react';
import axios from 'axios';

import API_KEY from '../config';
import { Searchbar } from '../components/Searchbar';

export const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async query => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
      );
      console.log(response);
      setSearchResults(response.data.results);
    } catch (error) {
      console.log('Error searching movies', error);
    }
  };

  return (
    <div>
      <h1>Movies</h1>
      <Searchbar onSearch={handleSearch} />
      <div className="movie-grid">
        {searchResults.map(movie => (
          <div key={movie.id} className="movie-tile">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <p>Popularity: {movie.popularity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
