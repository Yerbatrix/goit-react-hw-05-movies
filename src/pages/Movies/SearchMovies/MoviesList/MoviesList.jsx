import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.movies}>
      {movies.map(movie => (
        <li key={movie.id} className={css.movieTile}>
          <Link to={`/movies/${movie.id}`}>
            <div className={css.movieTileContent}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
