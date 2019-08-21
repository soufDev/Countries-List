import React from 'react';
import { StyledSpinner, StyledFullPageSpinner } from './Loader.styled';

export const Spinner = () => {
    return <StyledSpinner aria-label="loading" />
}

export const FullPageSpinner = () => (
    <StyledFullPageSpinner>
        <Spinner />
    </StyledFullPageSpinner>
)