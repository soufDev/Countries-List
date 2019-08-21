import React from 'react';
import { render } from '@testing-library/react';
import { Spinner, FullPageSpinner } from './Spinner';

test('test the <Spinner />', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toBeInTheDocument();
})

test('test the <FullPageSpinner', () => {
    const { container } = render(<FullPageSpinner />);
    expect(container.firstChild).toBeInTheDocument();
})