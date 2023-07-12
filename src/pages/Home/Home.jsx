import { trendingMovies } from 'components/ServiceAPI/API';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trending, setTrending] = useState([]);

  async function getTrending() {
    const trends = await trendingMovies();
    return setTrending(trends.results);
  }

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <>
      <div>
        <h1>Trending today</h1>
        <MoviesList movies={trending} />
      </div>
    </>
  );
};

export default Home;
