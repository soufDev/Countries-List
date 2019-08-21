import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg)
    }
`;

export const StyledSpinner = styled(FaSpinner)`
    color: ${({ theme }) => theme.darkGrey};
    animation: ${spin} 1s linear infinite;
`;

export const StyledFullPageSpinner = styled.div`
    margin-top: 3em;
    font-size: 4em;
    justify-content: center;
    display: flex;
`;