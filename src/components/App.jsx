import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MoviesDetails/MoviesDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};
