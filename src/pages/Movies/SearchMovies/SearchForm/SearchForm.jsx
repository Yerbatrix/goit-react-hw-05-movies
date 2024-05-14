import React, { useState } from 'react';
import css from './SearchForm.module.css';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('query') || '';
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query });
    onSubmit(query);
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <form className={css.searchform} onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search desired movies"
        value={query}
        onChange={handleChange}
        className={css.searchbar}
      />
      <button className={css.searchbutton} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
