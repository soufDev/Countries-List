import { State as fetchState } from './useFetch';

export interface Country {
    name: string;
    capital: string;
    altSpellings: {
        items: string[];
    };
    relevance: string;
    region: string;
    subregion: string;
    translation: string[];
    population: number;
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    callingCodes: string[];
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    currencies: string[];
    languages: string[];
}

export type State = fetchState<Country[]>;
export type ContextAction<T> =
    | { type: 'INIT', payload: { data: Country [] } }
    | { type: 'PAGINATE', payload: { pageNumber: number, data: Country[] } }
    | { type: 'SORT', payload: { countries: Country[], headerTableItem: string, ascSort: boolean } }
    | { type: 'SEARCH', payload: { pageNumber: number, data: Country[] } };

export type Action = ContextAction<Country[]>;
export type Dispatch = (type: Action) => void;

export type ProviderProps = { children: React.ReactNode }

export interface ContextState extends fetchState<Country[]> {
    countries: Country[];
    currentPage: number;
    numberOfPages: number;
    currentTableItem: string;
    ascSort: boolean;
    tempCountries: Country[];
}