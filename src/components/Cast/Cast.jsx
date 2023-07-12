import { movieCredits } from 'components/ServiceAPI/API';
import { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getCast() {
      try {
        const movieCast = await movieCredits(movieId);
        console.log(movieCast);
        setCast(movieCast);
      } catch (error) {
        setError(error.message);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <>
      <div>
        <ul>
          <li>
            <img src="" alt="" />
            <h3></h3>
            <p></p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Cast;
