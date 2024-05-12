import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_KEY from '../../config';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        setMovieDetails(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movieDetails) {
    return <div>Movie details not found.</div>;
  }

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
        className={movieDetails.moviePoster}
      />
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Rating: {movieDetails.vote_average}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetails;
