import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '.././pages/Home/Home';
import { Movies } from '.././pages/Movies/Movies';
import css from './App.module.css';
import styled from 'styled-components';

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
        <StyledLink to="/" activeClassName={css.active}>
          Home
        </StyledLink>
        <StyledLink to="/movies" activeClassName={css.active}>
          Movies
        </StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
