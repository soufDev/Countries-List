import React from 'react';
import { render } from '@testing-library/react';
import { RadioGroup } from './RadioGroup';
import { RadioGroupProps } from '../../types/RadioGroup';

const props: RadioGroupProps = {
    items: ['dinars', 'euros', 'dollars'],
    value: 'dinars',
    onChange: jest.fn(),
};

test('should render without crashing', () => {
    const { container } = render(<RadioGroup {...props} />);
    expect(container.firstChild).toBeInTheDocument();
})

test('should render 3 items', () => {
    const { getAllByTestId } = render(<RadioGroup {...props} />);
    expect(getAllByTestId(/radio-item/i).length).toBe(3);
    expect(getAllByTestId(/radio-button/i).length).toBe(3);
})

test('should the initial checked radio be dinars item', () => {
    const { getAllByTestId } = render(<RadioGroup {...props} />);
    const dinarsRadioButton = getAllByTestId('radio-button')[0] as HTMLInputElement;
    expect(dinarsRadioButton.checked).toBe(true);
});

test('should change the checked value to dollars', () => {
    const { getAllByTestId, rerender } = render(<RadioGroup {...props} />);
    const dinarsRadioButton = getAllByTestId(/radio-button/i)[0] as HTMLInputElement
    const eurosRadioButton = getAllByTestId(/radio-button/i)[1] as HTMLInputElement
    const dollarsRadioButton = getAllByTestId(/radio-button/i)[2] as HTMLInputElement;
    expect(dollarsRadioButton.checked).toBe(false);
    expect(dinarsRadioButton.checked).toBe(true);
    expect(eurosRadioButton.checked).toBe(false);
    
    rerender(<RadioGroup {...props} value='dollars' />);
    expect(dollarsRadioButton.checked).toBe(true);
    expect(dinarsRadioButton.checked).toBe(false);
    expect(eurosRadioButton.checked).toBe(false);
})