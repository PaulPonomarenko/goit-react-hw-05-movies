import { trendingMovies } from 'components/ServiceAPI/API';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movie, setTrending] = useState([]);

  const location = useLocation();

  useEffect(() => {
    async function getTrending() {
      const trends = await trendingMovies();
      return setTrending(trends.results);
    }
    getTrending();
  }, []);

  return (
    <>
      <div>
        <h1>Trending today</h1>
        <MoviesList movies={movie} location={location} />
      </div>
    </>
  );
};

export default Home;
