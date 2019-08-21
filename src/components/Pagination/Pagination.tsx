import React from 'react';
import { PageItem, PaginationWrapper } from './Pagination.styled';
import { PaginationProps } from '../../types/Pagination';

export const Pagination: React.FC<PaginationProps> = React.memo(({ currentPage, numberOfPages, onClick }) => {
    const content = [];
    const handleClick = (value: number) => (e: React.SyntheticEvent) => {
        onClick(value);
    }
    for (let i = 1; i <= numberOfPages; i += 1) {
        content.push(
            <PageItem data-testid="pagination-item" key={i} active={i === currentPage} onClick={handleClick(i)}>{i}</PageItem>)
    }
    return (
        <PaginationWrapper>
            {content}
        </PaginationWrapper>
    )
});