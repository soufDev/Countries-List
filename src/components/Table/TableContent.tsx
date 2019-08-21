import React from 'react';
import { TableContentProps } from '../../types/Table';
import { Country } from '../../types/Country';
import { TableItem } from './TableItem';
import { Spinner } from '../Spinner/Spinner';
import { StyledContent } from './Table.styled';

export const TableContent: React.FC<TableContentProps> = ({ isLoading, items }) => {
    if (isLoading) {
        return (
            <StyledContent>
                <Spinner />
            </StyledContent>
        )
    }
    if (items && items.length === 0) {
        return (
            <StyledContent>
                <h4>No Result</h4>
            </StyledContent>
        )
    }
    return (
        <>
            {items.map((country: Country, index: number) => <TableItem key={index} country={country} isEven={index % 2 === 1} />)}
        </>
    )
}