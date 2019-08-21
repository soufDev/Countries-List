import React from 'react';
import { Item, RadioButton, RadioButtonLabel } from './Radio.styled';
import { RadioProps } from '../../types/RadioGroup';

export const Radio: React.FC<RadioProps> = React.memo(({ value, label, onChange }) => {
    return (
        <Item data-testid="radio-item">
            <RadioButton
                type="radio"
                name="radio"
                value={label}
                checked={value === label}
                onChange={onChange}
                data-testid="radio-button"
            />
            <RadioButtonLabel />
            <div>{label.toUpperCase()}</div>
        </Item>
    )
})