import React from 'react';
import { TableContentProps } from '../../types/Table';
import { Country } from '../../types/Country';
import { TableItem } from './TableItem';

export const TableContent: React.FC<TableContentProps> = ({ isLoading, items }) => {
    if (isLoading) {
        return (
            <>
                <h4>Loadgin ...</h4>
            </>
        )
    }
    // if (items && items.length === 0) {
    //     return (
    //         <>
    //             <h4>No Result Match</h4>
    //         </>
    //     )
    // }
    return (
        <>
            {items.map((country: Country, index: number) => <TableItem key={index} country={country} isEven={index % 2 === 1} />)}
        </>
    )
}