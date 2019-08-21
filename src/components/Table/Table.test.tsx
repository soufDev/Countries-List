import React from 'react';
import { render } from '@testing-library/react';
import { Table } from './Table';
import { TableProps } from '../../types/Table';
import { countries } from '../utils/testUtils';
const props: TableProps = {
    currentHeaderItem: '',
    countries,
    onClickHeaderItem: jest.fn(),
    isLoading: false
}
// this test is enough because the logic was already tested before
test('should render without crashing', () => {
    const { container } = render(<Table {...props} />);
    expect(container.firstChild).toBeInTheDocument();
})