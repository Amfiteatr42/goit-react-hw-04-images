import { useState } from 'react';
import PropTypes from 'prop-types';
import s from '../../styles.module.css';

export function Searchbar({ isLoading, onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  }

  const onInputChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button
          type="submit"
          className={s.SearchFormButton}
          disabled={isLoading}
        >
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          value={searchQuery}
          onChange={onInputChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
