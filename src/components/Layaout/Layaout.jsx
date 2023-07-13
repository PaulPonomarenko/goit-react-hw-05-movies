import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import css from './Layaout.module.css';

const Layaout = () => {
  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink className={css.nav__link} to="/">
            Home
          </NavLink>
          <NavLink className={css.nav__link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layaout;
