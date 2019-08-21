import React from 'react';
import { render } from '@testing-library/react';
import { RadioProps } from '../../types/RadioGroup';
import { Radio } from './Radio';

const props: RadioProps = {
    value: 'euro',
    label: 'euro',
    onChange: jest.fn(),
};

test('should render without crashing', () => {
    const { container } = render(<Radio {...props} />);
    expect(container.firstChild).toBeInTheDocument();
})

test('should render the label with uppercase', () => {
    const { getByText } = render(<Radio {...props} />);
    expect(getByText(props.label.toUpperCase())).toBeInTheDocument();
})

test('should call onChange function', () => {
    const { getByTestId } = render(<Radio {...props} value="dinars" label="dinars" />);
    const radioButton = getByTestId(/radio-button/i) as HTMLInputElement;
    expect(radioButton.value).toBe('dinars');
})