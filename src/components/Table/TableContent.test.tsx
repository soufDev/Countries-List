import React from 'react';
import { TableContentProps } from '../../types/Table';
import { TableContent } from './TableContent';
import { render } from '@testing-library/react';
import { countries } from '../utils/testUtils';

const props: TableContentProps = {
    isLoading: false,
    items: countries,
}

test('should render withour crashing', () => {
    const { container } = render(<TableContent {...props} />) 
    expect(container.firstChild).toBeInTheDocument();
})

test('should render spinner', () => {
    const { getByLabelText } = render(<TableContent {...props} isLoading={true} />);
    expect(getByLabelText('loading')).toBeInTheDocument();
})

test('should render no result message', () => {
    const { getByText } = render(<TableContent {...props} items={[]} />);
    expect(getByText('No Result')).toBeInTheDocument();
})

test('should render items', () => {
    const { getByText, getAllByTestId } = render(<TableContent {...props} />);
    expect(getByText(props.items[0].name)).toBeInTheDocument();
    expect(getAllByTestId('table-item').length).toBe(props.items.length);
})