import React from 'react';
import { StyledInput } from './Input.styled';
import { InputProps } from '../../types/Input';


export const Input: React.FC<InputProps> = ({ onChange, onKeyPress, placeHolder, value }) => (
    <StyledInput
        type="text"
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder={placeHolder}
        value={value}
    />
)