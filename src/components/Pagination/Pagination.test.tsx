import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';
import { PaginationProps } from '../../types/Pagination';
import { theme } from '../../theme';

const props: PaginationProps = {
    currentPage: 5,
    numberOfPages: 10,
    onClick: jest.fn()
}

test('should render without crashing', () => {
    const { container } = render(<Pagination {...props} />)
    expect(container.firstChild).toBeInTheDocument();
});

test('should render 10 pagiation item', () => {
    const { getAllByTestId } = render(<Pagination {...props} />);
    expect(getAllByTestId(/pagination-item/i).length).toBe(10);
});

test('should the fifth item have a white color', () => {
    const { getAllByTestId } = render(<Pagination {...props} />);
    const items = getAllByTestId(/pagination-item/i);
    const activeItem = items[4] as HTMLAnchorElement;
    expect(activeItem).toHaveStyle("color: '#fff'");
})

test('click on an item', () => {
    const { getAllByTestId } = render(<Pagination {...props} />);
    const items = getAllByTestId(/pagination-item/i);
    const selectedItem = items[1] as HTMLAnchorElement;
    fireEvent.click(selectedItem);
    expect(props.onClick).toHaveBeenCalled();
    expect(props.onClick).toHaveBeenCalledWith(2);
    expect(props.onClick).toHaveBeenCalledTimes(1);
});

