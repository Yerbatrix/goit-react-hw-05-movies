import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_KEY from '../../../../config';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(movieDetails);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        setMovieDetails(response.data);
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
    <div className={css.Container}>
      <button className={css.goBackButton}>
        <span className={css.goBack}>← Go back</span>
      </button>
      <div className={css.movieDetailsContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className={css.moviePoster}
        />
        <div className={css.movieInfo}>
          <h2 className={css.title}>
            {movieDetails.title} (
            {new Date(movieDetails.release_date).getFullYear()})
          </h2>
          <p className={css.genres}>
            Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}
          </p>
          <p className={css.overview}>{movieDetails.overview}</p>
          <p className={css.rating}>Rating: {movieDetails.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
