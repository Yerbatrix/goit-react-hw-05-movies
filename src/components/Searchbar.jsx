import { useState } from 'react';

export const Searchbar = () => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search desired movies"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </div>
  );
};
