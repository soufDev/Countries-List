import React from 'react';
import { NavbarItem, WrapperNavbar } from './Navbar.styled';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface Props {
    initialRoute: string;
    items: string[];
    onClickItem: (name: string | null) => void;
}

export const Navbar: React.FC<Props> = ({ initialRoute, items, onClickItem }) => {
    const [activeItem, setActiveItem] = useLocalStorage<string | null>('path-router', initialRoute);
    const onItemClick = (e: React.SyntheticEvent) => {
        setActiveItem(e.currentTarget.textContent);
        onClickItem(e.currentTarget.textContent);
    };
    return (
        <WrapperNavbar>
            {items.map((item, key) => (
                <NavbarItem active={item === activeItem} key={key} onClick={onItemClick}>{item}</NavbarItem>
            ))}
        </WrapperNavbar>
    );
};