import { movieCredits } from 'components/ServiceAPI/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        const movieCast = await movieCredits(movieId);
        setCast(movieCast.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <>
      <div>
        {loading && <Loader />}
        {cast.length > 0 ? (
          <ul>
            {cast.map(({ character, id, name, profile_path }) => {
              return (
                <li key={id}>
                  <img
                    width={150}
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : `https://profiles.utdallas.edu/img/default.png`
                    }
                    alt={name}
                  />
                  <h3>{name}</h3>
                  <p>{character}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>We don't have any cast for this movie</p>
        )}
      </div>
    </>
  );
};

export default Cast;
