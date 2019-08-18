import React from 'react';
import { StyledTableContainer, StyledFlexTable } from './Table.styled';
import { TableHeader } from './TableHeader';
import { TableContent } from './TableContent';
import { TableProps } from '../../types/Table';

const HEADER_TITLE = ["name", "region", "area", "population", "languages", "currency"];

export const Table: React.FC<TableProps> = ({ countries, isLoading, onClickHeaderItem }) => {
    return (
        <StyledTableContainer>
            <StyledFlexTable isEven={false}>
                <TableHeader titleItems={HEADER_TITLE} onClick={onClickHeaderItem}/>
            </StyledFlexTable>
            <TableContent isLoading={isLoading} items={countries} />
        </StyledTableContainer>
    )
}