import React from 'react';
import { Input } from './Input';
import { InputProps } from '../../types/Input';
import { render, fireEvent } from '@testing-library/react';

const props: InputProps = {
    onChange: jest.fn(),
    onKeyPress: jest.fn(),
    placeHolder: 'type value',
    value: '',
}
test('should render without crashing', () => {
    const { container } = render(<Input {...props} />);
    expect(container.firstChild).toBeInTheDocument();
});

test('should fire change Event', () => {
    const { getByPlaceholderText } = render(<Input {...props} />);
    const input = getByPlaceholderText(props.placeHolder) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    
    fireEvent.change(input, { target: { value: 'Germany' } } );
    expect(props.onChange).toHaveBeenCalled();
    expect(props.onChange).toBeCalledTimes(1);
})