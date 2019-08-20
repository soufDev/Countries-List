import styled from 'styled-components';

export const PaginationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
    align-self: center;
`;

export const PageItem = styled.a<{active: boolean}>`
    padding: 15px;
    border: 0.01em solid lightgrey;
    margin: 2px;
    text-align: center;
    background-color: ${({ active, theme }) => active ? theme.darkGrey: theme.white};
    color: ${({ active, theme }) => active ? theme.white: theme.dark};
    &:hover {
        background-color: ${({ theme, active }) => active ? theme.black: theme.darkGrey};
        cursor: pointer;
        color: white;

    }
`;