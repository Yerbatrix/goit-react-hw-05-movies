import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '.././pages/Home/Home';
import { Movies } from '.././pages/Movies/Movies';
import css from './App.module.css';
import styled from 'styled-components';
import NotFound from '../pages/NotFound/NotFound';
import MovieDetails from './MovieDetails/MovieDetails';

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 8px;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/goit-react-hw-05-movies" activeClassName={css.active}>
          Home
        </StyledLink>
        <StyledLink to="/movies" activeClassName={css.active}>
          Movies
        </StyledLink>
      </nav>

      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
