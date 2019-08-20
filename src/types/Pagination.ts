export interface PaginationProps {
    currentPage: number;
    numberOfPages: number;
    onClick: (value: number) => void;

}