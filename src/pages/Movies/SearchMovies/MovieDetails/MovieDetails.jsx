import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import API_KEY from '../../../../config';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const handleGoBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate('/');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movieDetails) {
    return <div>Movie details not found.</div>;
  }

  return (
    <div className={css.Container}>
      <button className={css.goBackButton} onClick={handleGoBack}>
        <span className={css.goBack}>← Go back</span>
      </button>
      <div className={css.movieDetailsContainer}>
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : defaultImg
          }
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
      <div>
        <p className={css.additionalInformation}>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              Read about Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Read some Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
