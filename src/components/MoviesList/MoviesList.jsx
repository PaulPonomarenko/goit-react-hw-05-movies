import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>{movie.title} </NavLink>
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
