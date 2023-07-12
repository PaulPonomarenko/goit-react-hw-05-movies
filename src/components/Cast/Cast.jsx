import { movieCredits } from 'components/ServiceAPI/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const movieCast = await movieCredits(movieId);

        setCast(movieCast.cast);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default Cast;
