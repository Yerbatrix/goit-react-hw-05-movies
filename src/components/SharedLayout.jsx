import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Container } from './Container/Container';
import { Header } from './Container/Header/Header';
import { Logo } from './Container/Header/Logo';
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

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          Awesome Movie Finder
        </Logo>
        <nav>
          <StyledLink to="/" activeClassName={css.active}>
            Home
          </StyledLink>
          <StyledLink to="/movies" activeClassName={css.active}>
            Movies
          </StyledLink>
        </nav>
      </Header>

      <Outlet />
    </Container>
  );
};
