import { movieSearch } from 'components/ServiceAPI/API';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import ErrorMasage from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import MovieForm from 'components/MovieForm/MovieForm';

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query') ?? '';

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

  const setParams = query => {
    const params = query !== '' ? { query } : {};
    setSearchParams(params);
  };

  return (
    <>
      <MovieForm query={query} setParams={setParams} />
      {loading && <Loader />}

      {query && !loading && <MoviesList movies={movie} />}
      {movie.length === 0 && <ErrorMasage error={error} />}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Movie;
