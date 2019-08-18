import { Country } from './Country';

export type MouseEventHeadetTitle = React.MouseEvent<HTMLAnchorElement & { title: string }>

export interface TableHeaderProps {
    titleItems: string[];
    onClick: (e: MouseEventHeadetTitle) => void;
}

export interface TableItemProps {
    country: Country;
    isEven: boolean;
}

export interface TableContentProps {
    isLoading: boolean;
    items: Country[];
}

export interface TableProps {
    countries: Country[];
    isLoading: boolean;
    onClickHeaderItem: (e: MouseEventHeadetTitle) => void;
}
