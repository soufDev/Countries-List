import styled from 'styled-components';

interface NavBarItemProps {
    active: boolean;
}

export const WrapperNavbar = styled.nav`
    display: flex;
    flex-direction: flex-start;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: ${({ theme }) => theme.darkGrey};
    position: fixed;
    top: 0;
    width: 100%;
`;

export const NavbarItem = styled.div<NavBarItemProps>`
    font-family: sans-serif;
    cursor: pointer;
    color: white;
    text-align: center;
    padding: 14px 16px;
    &:hover {
        background-color: ${({ active, theme }) => active ? theme.black : theme.darkGrey};
    }
    background-color: ${({ active, theme }) => active ? theme.black : theme.darkGrey};
    text-transform: capitalize;
    text-decoration: none;
`; 
