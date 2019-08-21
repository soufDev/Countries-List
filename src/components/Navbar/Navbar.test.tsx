import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Navbar } from './Navbar';
import { NavbarProps } from '../../types/Navbar';

const props: NavbarProps = {
    initialRoute: 'home',
    items: ['home', 'countries'],
    onClickItem: jest.fn()
}

test('should render without crashing', () => {
    const { container } = render(<Navbar {...props} />);
    expect(container.firstChild).toBeInTheDocument();
});

test('should render all the navbar items', () => {
    const { getAllByTestId } = render(<Navbar {...props} />);
    expect(getAllByTestId('navbar-item').length).toBe(props.items.length);
});

test('should fire click event when I click on countries item', () => {
    const { getByText } = render(<Navbar {...props} />);
    const countriesItem = getByText('countries') as HTMLAnchorElement;
    fireEvent.click(countriesItem);
    expect(props.onClickItem).toHaveBeenCalled();
    expect(props.onClickItem).toHaveBeenCalledTimes(1);
})