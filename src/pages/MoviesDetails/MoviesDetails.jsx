import { filmDetails } from 'components/ServiceAPI/API';
import { useState, useEffect, useRef, Suspense } from 'react';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';
import ErrorMasage from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import css from './MoviesDetails.module.css';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getDetails() {
      try {
        setLoading(true);
        const selectedMovie = await filmDetails(movieId);
        setDetails(selectedMovie);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getDetails();
  }, [movieId]);

  if (!details) {
    return;
  }

  const { genres, title, overview, popularity, poster_path } = details;

  return (
    <>
      <NavLink to={backLinkHref.current}>
        <button>Go Back</button>
      </NavLink>

      {loading && <Loader />}
      <div className={css.film__container}>
        <img
          className={css.img}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://static8.depositphotos.com/1431107/919/i/600/depositphotos_9199988-stock-photo-oops-icon.jpg`
          }
          alt={title}
        />
        <div className={css.info}>
          <h2>{title}</h2>
          <p>User Score: {popularity}</p>
          <h3> Overview</h3>
          <p>{overview}</p>
        </div>
        <div className={css.ganres__info}>
          <h3 className={css.second__info}>Genres</h3>
          {genres && (
            <ul className={css.genres}>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        <h3 className={css.second__info}>Additional information</h3>
        <ul className={css.link__container}>
          <li className={css.link__info}>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li className={css.link__info}>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      {error && <ErrorMasage error={error} />}
    </>
  );
};

export default MovieDetails;
