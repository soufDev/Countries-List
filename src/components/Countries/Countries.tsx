import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { MouseEventHeadetTitle } from '../../types/Table';
import { Table } from '../Table/Table';
import { useCountryData, useCountryDispatch } from './Context';
import Pagination from '../Pagination';
import { sortByProperty, searchByName, filterByCurrency } from '../utils/utils';
import Input from '../Input';
import { WrapperCountries, WrapperInputs } from './Countries.styled';
import RadioGroup from '../RadioGroup';

export const Countries: React.FC<RouteComponentProps> = () => {
    const {
        response: data,
        countries,
        isLoading,
        currentPage,
        numberOfPages,
        currentTableItem,
        ascSort
    } = useCountryData();
    const dispatch = useCountryDispatch();
    
    const [searchValue, setSearchValue] = React.useState<string>('');
    const [currency, setCurrency] = React.useState<string>('all');


    React.useEffect(() => {
        dispatch({ type: 'INIT', payload: {
            data,
        }});
    }, [data]);

    const paginationHandler = (value: number) => {
        dispatch({ type: 'PAGINATE', payload: {
            pageNumber: value,
            data: countries,
        } });
    };

    const headerItemHandler = (e: MouseEventHeadetTitle) => {
        const target = e.target as HTMLAnchorElement & { title: string };
        const sortedCountries = sortByProperty(countries, target.title, ascSort);
        dispatch({ type: 'SORT', payload: {
            countries: sortedCountries,
            headerTableItem: target.title,
            ascSort,
        }})
    };

    const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            setCurrency('all');
            dispatch({
                type: 'SEARCH',
                payload: {
                    pageNumber: 1,
                    data: searchByName(data, searchValue)
                }
            })
        }
    }

    const inputHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setSearchValue(e.currentTarget.value);
    }

    const currencyHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setCurrency(e.currentTarget.value);
        setSearchValue('');
        dispatch({
            type: 'SEARCH',
            payload: {
                pageNumber: 1,
                data: filterByCurrency(data, e.currentTarget.value),
            }
        })
    }
    return (
        <WrapperCountries>
            <WrapperInputs>
                <RadioGroup
                    value={currency}
                    items={['all', 'eur']}
                    onChange={currencyHandler}
                />
                <Input
                    placeHolder="Search By Name.."
                    onChange={inputHandler}
                    onKeyPress={keyPressHandler}
                    value={searchValue}
                />
            </WrapperInputs>
            <Table isLoading={isLoading} countries={countries} onClickHeaderItem={headerItemHandler} currentHeaderItem={currentTableItem} />
            <Pagination currentPage={currentPage} numberOfPages={numberOfPages} onClick={paginationHandler} />
        </WrapperCountries>

    )
};
