import { movieSearch } from 'components/ServiceAPI/API';
import { useEffect, useState } from 'react';
import css from './Movie.module.css';
import { ReactComponent as SearchIcon } from 'icons/search.svg';
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import ErrorMasage from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';

const Movie = () => {
  const [inputValue, setInputValue] = useState('');
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const query = searchParams.get('query');

  const handleChange = event => {
    setInputValue(event.target.value.toLowerCase());
  };

  useEffect(() => {
    if (query === '') return;

    async function getMoviesQuery() {
      setLoading(true);
      try {
        const data = await movieSearch(query);
        setMovie(data.results);
        if (data.results.length === 0) {
          throw new Error('По вашому запиту картинок не знайдено...');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getMoviesQuery();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return toast.info('Введіть назву!');
    }
    const form = e.currentTarget;
    setSearchParams({ query: inputValue });
    console.log(inputValue);
    console.log(query);
    if (inputValue === query) {
      setInputValue('');
      return toast.info('Фільми по запиту вже знайдено!');
    }
    setInputValue('');
    form.reset();
    // if (movie.length === 0) {
    //   return toast.error('Введіть назву!');
    // }

    console.log(movie);
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
      {loading && <Loader />}

      {query && !loading && <MoviesList movies={movie} />}
      {movie.length === 0 && <ErrorMasage error={error} />}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Movie;
