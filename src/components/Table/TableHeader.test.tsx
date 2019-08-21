import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TableHeader } from './TableHeader';
import { TableHeaderProps } from '../../types/Table';

const props: TableHeaderProps = {
    currentItem: '',
    titleItems: ['name', 'region', 'area', 'population', 'languages', 'currencies'],
    onClick: jest.fn(),
}
test('should render without crashing', () => {
    const { container } = render(<TableHeader {...props} />);
    expect(container.firstChild).toBeInTheDocument();
});

test('should trigger a onClick handle', () => {
    const { getByText } = render(<TableHeader {...props}/>);
    const regionItem = getByText('region');
    fireEvent.click(regionItem);
    expect(props.onClick).toHaveBeenCalled();
})