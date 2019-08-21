import styled from 'styled-components';

export const TableHeaderItem = styled.a<{ active: boolean }>`
    display: flex;
    align-items: center;
    width: calc(100% / 6);
    text-align: center;
    padding: 1.2em 0.5em;
    text-decoration: none;
    text-transform: capitalize;
    color: ${({ theme }) => theme.white};
    background: ${({ theme, active }) => active ? theme.black : theme.darkGrey};
    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.black};
    }
`;

export const StyledTableContainer = styled.div`
    * {
        box-sizing: border-box;
    }
    display: block;
    margin: 2em auto;
    width: 80%;
    max-width: 75%;
`;

export const StyledFlexRow = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% / 6);
    text-align: center;
    padding: 1.2em 0.5em;
`;

export const StyledFlexTable = styled.div<{ isEven: boolean }>`
    display: flex;
    flex-flow: row wrap;
    transition: 0.2s;
    background: ${({ isEven, theme }) => (isEven ? theme.greyishLight : theme.white)};
    &.row:nth-child(odd) ${StyledFlexRow} {
        background: ${({ theme }) => theme.greyishLight};
    }
    &:not(:first-of-type):hover {
        transition: 500ms;
        transform: scale(1.01);
        box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`;

export const StyledContent = styled.div`
    display: flex;
    justify-content: center;
`;
