import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useAsync, PromiseFn } from 'react-async';
import { MouseEventHeadetTitle } from '../../types/Table';
import { Table } from '../Table/Table';
import { useCountryData } from './Context';
import axios, { AxiosResponse } from 'axios';
import { Country } from '../../types/Country';
import { State } from '../../types/useFetch';

// export const fetchData = <T>(url: string): Promise<T> => {
//     return axios.get<T>(url, {
//         headers: {
//             "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
// 	        "x-rapidapi-key": "a020cc16ffmsha6c2fd7eb13763dp128656jsn68dd7bd70ea5"
//         }
//     }
//     ).then((response: AxiosResponse<T>) => response.data);
// };

function fetchData<T>({ url }: { url: string }) {
    return axios.get(url, {
            headers: {
                "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
                "x-rapidapi-key": "a020cc16ffmsha6c2fd7eb13763dp128656jsn68dd7bd70ea5"
            }
        }).then(({ data }: { data: T }) => data);
}

export const Countries: React.FC<RouteComponentProps> = () => {
    // const { response: countries, error, isLoading } = useCountryData();
    const { data = [], error, isLoading } = useAsync<Country[]>({ promiseFn: fetchData as PromiseFn<Country[]>, url: '/all' });
    const headerItemHandler = (e: MouseEventHeadetTitle) => {
        const target = e.target as HTMLAnchorElement & { title: string };
        console.log({ title: target.title });
    }
    // const countries = data || [];
    console.count('countries')
    console.log({ data, error, isLoading })
    if (error) {
        return <h1>Error</h1>
    } 
    return (
        <Table isLoading={isLoading} countries={data} onClickHeaderItem={headerItemHandler} />
    )
};
