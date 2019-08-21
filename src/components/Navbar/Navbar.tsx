import React from 'react';
import { NavbarItem, WrapperNavbar } from './Navbar.styled';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { NavbarProps } from '../../types/Navbar';


export const Navbar: React.FC<NavbarProps> = ({ initialRoute, items, onClickItem }) => {
    const [activeItem, setActiveItem] = useLocalStorage<string | null>('path-router', initialRoute);
    const onItemClick = (e: React.SyntheticEvent) => {
        setActiveItem(e.currentTarget.textContent);
        onClickItem(e.currentTarget.textContent);
    };
    return (
        <WrapperNavbar>
            {items.map((item, key) => (
                <NavbarItem active={item === activeItem} key={key} onClick={onItemClick} data-testid="navbar-item">{item}</NavbarItem>
            ))}
        </WrapperNavbar>
    );
};