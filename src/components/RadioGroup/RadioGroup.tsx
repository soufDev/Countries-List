import React from 'react';
import { Wrapper } from './Radio.styled';
import { Radio } from './Radio';
import { RadioGroupProps } from '../../types/RadioGroup';

export const RadioGroup: React.FC<RadioGroupProps> = React.memo(({ value, items, onChange}) => {
    return (
        <Wrapper>
            {items.map((item, index) => (
                <Radio
                    key={index}
                    label={item}
                    value={value}
                    onChange={onChange}
                />
            ))}
        </Wrapper>
    )
})