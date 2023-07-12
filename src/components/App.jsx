import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MoviesDetails/MoviesDetails';

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};
