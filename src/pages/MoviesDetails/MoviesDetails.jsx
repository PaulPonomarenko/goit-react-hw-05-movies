import { filmDetails } from 'components/ServiceAPI/API';
import { useState, useEffect } from 'react';
import { NavLink, useParams, useLocation } from 'react-router-dom';
import { ErrorCard } from 'components/Error/Error';
import Cast from 'components/Cast/Cast';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getDetails() {
      try {
        const selectedMovie = await filmDetails(movieId);
        console.log(selectedMovie);
        setDetails(selectedMovie);
      } catch (error) {
        setError(error.message);
      }
    }
    getDetails();
  }, [movieId]);

  if (!details) {
    return;
  }

  const { genres, title, overview, popularity, poster_path } = details;
  console.log(genres);

  return (
    <>
      <button>
        <NavLink to={location.state?.from ?? '/'}>Go Back</NavLink>
      </button>
      <div>
        <img
          width="300px"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://static8.depositphotos.com/1431107/919/i/600/depositphotos_9199988-stock-photo-oops-icon.jpg`
          }
          alt={title}
        />
        <h2>{title}</h2>
        <p>User Score {popularity}</p>
        <h3> Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres && (
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      {error && <ErrorCard>{error}</ErrorCard>}
    </>
  );
};

export default MovieDetails;
