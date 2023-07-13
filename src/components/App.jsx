import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layaout from './Layaout/Layaout';
import 'react-toastify/dist/ReactToastify.css';
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MoviesDetails/MoviesDetails'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Cast = lazy(() => import('../components/Cast/Cast'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layaout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
