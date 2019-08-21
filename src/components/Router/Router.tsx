import React from 'react';
import { StyledRouter } from './Router.styled';
import { Spinner } from '../Spinner/Spinner';

const Home = React.lazy(() => import('../Home'));
const Countries = React.lazy(() => import('../Countries'));

export const Router = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <StyledRouter>
        <Home path="/" />
        <Countries path="/countries" />
      </StyledRouter>
    </React.Suspense>
  );
}