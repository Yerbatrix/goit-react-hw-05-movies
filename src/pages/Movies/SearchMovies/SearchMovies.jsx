import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import API_KEY from '../../../config';
import SearchForm from './SearchForm/SearchForm';
import MoviesList from './MoviesList/MoviesList';

const SearchMovies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

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

  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
      <MoviesList movies={searchResults} />
    </div>
  );
};

export default SearchMovies;
