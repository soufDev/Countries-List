import React from 'react';
import { StyledFlexTable, StyledFlexRow } from './Table.styled';
import { TableItemProps } from '../../types/Table';

export const TableItem: React.FC<TableItemProps> = ({ country, isEven }) => {
    return (
        <StyledFlexTable isEven={isEven} data-testid="table-item">
            <StyledFlexRow>{country.name}</StyledFlexRow>
            <StyledFlexRow>{country.region}</StyledFlexRow>
            <StyledFlexRow>{country.area}</StyledFlexRow>
            <StyledFlexRow>{country.population}</StyledFlexRow>
            <StyledFlexRow>{country.languages}</StyledFlexRow>
            <StyledFlexRow>{country.currencies}</StyledFlexRow>
        </StyledFlexTable>
    )
}