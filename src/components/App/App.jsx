import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Loader from '../Loader/Loader';
import Logout from '../Logout/Logout';
import Cookie from '../Cookie/Cookie';

import { StyledLink, Nav, SpinnerWrapper } from './App.styled';

const App = () => {
  const token = useSelector(state => state.token);

  return (
    <>
      <Nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        {!token && <StyledLink to="/register">Sign up </StyledLink>}
        {!token && <StyledLink to="/login">Log in</StyledLink>}
        {token && <StyledLink to="/contacts">Contacts</StyledLink>}
        {token && <Logout />}
      </Nav>
      <Suspense
        fallback={
          <SpinnerWrapper>
            <Loader />
          </SpinnerWrapper>
        }
      >
        <Outlet />
      </Suspense>
      <Cookie />
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
