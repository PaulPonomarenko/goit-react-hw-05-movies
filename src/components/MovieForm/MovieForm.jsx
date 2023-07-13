import css from 'pages/Movie/Movie.module.css';
import { toast } from 'react-toastify';
import { ReactComponent as SearchIcon } from 'icons/search.svg';
import { useState } from 'react';

const MovieForm = ({ query, setParams }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return toast.info('Введіть назву!');
    }
    const form = e.currentTarget;
    setParams(inputValue);
    if (inputValue === query) {
      setInputValue('');
      return toast.info('Фільми по запиту вже знайдено!');
    }
    setInputValue('');
    form.reset();
  };

  return (
    <>
      <div className={css.searchbar}>
        <form className={css.movie__form} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchForm__button}>
            <SearchIcon width={30} height={30} />
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="query"
            onChange={handleChange}
            value={inputValue}
          />
        </form>
      </div>
    </>
  );
};

export default MovieForm;
