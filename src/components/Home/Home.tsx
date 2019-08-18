import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Wrapper } from './Home.styled';

export const Home: React.FC<RouteComponentProps> = () => {
    return (
        <Wrapper>
            <h1>Welcome home</h1>
        </Wrapper>
    )
}