import React from 'react';
import { TableHeaderItem } from './Table.styled';
import { TableHeaderProps } from '../../types/Table';


export const TableHeader: React.FC<TableHeaderProps> = ({ titleItems, onClick }) => {
    return (
        <>
            {titleItems.map((item: string, index: number) => (
                <TableHeaderItem key={index} title={item} onClick={onClick}>{item}</TableHeaderItem>
            ))}
        </>
    );
}