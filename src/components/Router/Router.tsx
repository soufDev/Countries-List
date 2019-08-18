import React from 'react';
import { StyledRouter } from './Router.styled';

const Home = React.lazy(() => import('../Home'));
const Shipments = React.lazy(() => import('../Countries'));

const Loader = () => <h3>loading page...</h3>;

export const Router = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <StyledRouter>
        <Home path="/" />
        <Shipments path="/countries" />
      </StyledRouter>
    </React.Suspense>
  );
}