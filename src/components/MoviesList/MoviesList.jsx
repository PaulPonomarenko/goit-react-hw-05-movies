import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}{' '}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
