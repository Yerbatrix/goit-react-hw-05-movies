import React, { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
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
