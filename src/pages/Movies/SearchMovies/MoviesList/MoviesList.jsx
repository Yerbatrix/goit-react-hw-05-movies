import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <ul className={css.movies}>
      {movies.map(movie => (
        <li key={movie.id} className={css.movieTile}>
          <Link to={`${movie.id}`}>
            <div className={css.movieTileContent}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.title}
                className={css.moviePoster}
              />
              <div className={css.movieInfo}>
                <h2 className={css.title}>{movie.title}</h2>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
