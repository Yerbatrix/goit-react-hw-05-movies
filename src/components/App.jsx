import { SharedLayout } from './SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { Cast } from 'pages/Movies/SearchMovies/MovieDetails/Cast/Cast';
import { Reviews } from 'pages/Movies/SearchMovies/MovieDetails/Reviews/Reviews';

import NotFound from 'pages/NotFound/NotFound';
import MovieDetails from 'pages/Movies/SearchMovies/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
