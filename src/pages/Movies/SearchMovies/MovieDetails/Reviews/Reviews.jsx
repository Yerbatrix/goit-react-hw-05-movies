import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from 'config';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
        );
        setReviews(response.data.results);
      } catch (error) {
        console.log('Error fetching trending movies', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <div>
              <p>{review.author}</p>
              <p>{review.created_at}</p>
              <p>{review.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
