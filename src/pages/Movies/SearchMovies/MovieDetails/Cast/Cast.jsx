import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from 'config';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export const Cast = () => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
        );
        setCast(response.data.cast);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching cast', error);
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  if (loading) {
    return <div>Loading cast...</div>;
  }

  if (cast.length === 0) {
    return <div>No cast found for this movie.</div>;
  }

  return (
    <div className={css.castContainer}>
      <h2 className={css.title}>Cast</h2>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li key={actor.cast_id} className={css.actor}>
            <div>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                className={css.actorImage}
              />
              <p className={css.actorName}>{actor.name}</p>
              <p className={css.character}>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
