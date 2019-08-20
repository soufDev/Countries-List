import React from 'react';
import { StyledTableContainer, StyledFlexTable } from './Table.styled';
import { TableHeader } from './TableHeader';
import { TableContent } from './TableContent';
import { TableProps } from '../../types/Table';

const HEADER_TITLE = ["name", "region", "area", "population", "languages", "currency"];

export const Table: React.FC<TableProps> = React.memo(({ countries, isLoading, onClickHeaderItem, currentHeaderItem }) => {
    return (
        <StyledTableContainer>
            <StyledFlexTable isEven={false}>
                <TableHeader titleItems={HEADER_TITLE} onClick={onClickHeaderItem} currentItem={currentHeaderItem}/>
            </StyledFlexTable>
            <TableContent isLoading={isLoading} items={countries} />
        </StyledTableContainer>
    )
});