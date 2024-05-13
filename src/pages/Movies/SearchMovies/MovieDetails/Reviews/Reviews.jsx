import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from 'config';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
        );
        setReviews(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching reviews', error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  if (reviews.length === 0) {
    return <div>No reviews found for this movie yet.</div>;
  }

  return (
    <div className={css.reviewsContainer}>
      <h2 className={css.title}>Reviews</h2>
      <ul className={css.reviewsList}>
        {reviews.map(review => (
          <li key={review.id} className={css.review}>
            <div>
              <p className={css.author}>{review.author}</p>
              <p className={css.createdAt}>{review.created_at}</p>
              <p className={css.content}>{review.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
