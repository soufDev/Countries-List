import React from 'react';
import axios from 'axios';
import { Country, ContextState, Dispatch, Action, ProviderProps } from '../../types/Country';
import { State as fetchState } from '../../types/useFetch';
import { useAsync, PromiseFn } from 'react-async';
import { PAGE_SIZE } from '../utils/contants';
import { FullPageSpinner } from '../Spinner';


const InitContext = React.createContext<fetchState<Country[]> | undefined>(undefined);
const DataContext = React.createContext<ContextState | undefined>(undefined);
const DispatchContext = React.createContext<Dispatch | undefined>(undefined);

function paginate<T>(data: T[], pageSize: number = PAGE_SIZE, pageNumber: number = 1): T[] {
    return data.slice((pageNumber-1) * pageSize, pageNumber * pageSize);
}

const reducer = (state: ContextState, action: Action) => {
    switch(action.type) {
        case 'INIT':
            return {
                ...state,
                countries: paginate(state.response, PAGE_SIZE, 1),
                currentPage: 1,
                currentTableItem: '',
            };
        case 'PAGINATE':
            return {
                ...state,
                countries: paginate(state.tempCountries, PAGE_SIZE, action.payload.pageNumber),
                currentPage: action.payload.pageNumber,
                currentTableItem: '',
            }
        case 'SORT':
            return {
                ...state,
                tempCountries: state.response,
                countries: action.payload.countries,
                currentTableItem: action.payload.headerTableItem,
                ascSort: !action.payload.ascSort,
            }
        case 'SEARCH':
            return {
                ...state,
                tempCountries: action.payload.data,
                countries: paginate(action.payload.data, PAGE_SIZE, action.payload.pageNumber),
                numberOfPages: action.payload.data.length % PAGE_SIZE  === 0 ? action.payload.data.length / PAGE_SIZE: (action.payload.data.length / PAGE_SIZE) + 1,
                currentPage: action.payload.pageNumber,
            }
        default: return state;
    }
}

function fetchData<T>({ url }: { url: string }) {
    return axios.get(url, {
            headers: {
                "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
                "x-rapidapi-key": "a020cc16ffmsha6c2fd7eb13763dp128656jsn68dd7bd70ea5"
            }
        }).then(({ data }: { data: T }) => data);
}

const InitProvider: React.FC<ProviderProps> = ({ children }) => {
    const [firstAttempFinished, setFirstAttempFinished] = React.useState<boolean>(false);
    const {
        data: response = [],
        error,
        isPending: isLoading,
        isRejected,
        isSettled,
    } = useAsync<Country[]>({ promiseFn: fetchData as PromiseFn<Country[]>, url: '/all' });
    
    React.useLayoutEffect(() => {
        if (isSettled) {
            setFirstAttempFinished(true);
        }
    }, [isSettled]);

    if (!firstAttempFinished) {
        if (isLoading) {
            return <FullPageSpinner />
        }
        if (isRejected && error) {
            return (
                <div style={{ color: 'red' }}>
                    <p>Uh... There is a problem, Try refreshing the app.</p>
                    <pre>{error.message}</pre>
                </div>
            );
        }
    }
    return (
        <InitContext.Provider value={{ response, isLoading, error: isRejected }}>
            {children}
        </InitContext.Provider>
    )
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
    const initialData = useInitData();
    const { response } = initialData;
    const numberOfPages = response.length % PAGE_SIZE  === 0 ? response.length / PAGE_SIZE: (response.length / PAGE_SIZE) + 1;
    const initialState = {
        ...initialData,
        countries: [],
        numberOfPages,
        currentPage: 1,
        currentTableItem: '',
        ascSort: true,
        tempCountries: response,
    } as ContextState
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <DataContext.Provider value={state as ContextState}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </DataContext.Provider>
    )
}



function useInitData() {
    const context: fetchState<Country[]> | undefined = React.useContext(InitContext);
    if (context === undefined) {
        throw new Error(`DataContext must be within a InitProvider`);
    }
    return context;
};

function useCountryData(){
    const context: ContextState | undefined = React.useContext(DataContext);
    if (context === undefined) {
        throw new Error(`DataContext must be within a DataContextProvider`);
    }
    return context;
}

function useCountryDispatch() {
    const context: Dispatch | undefined = React.useContext(DispatchContext);
    if (context === undefined) {
        throw new Error(`DataContext must be within a DispatchContextProvider`);
    }
    return context;
}

export {
    Provider,
    InitProvider,
    useCountryData,
    useCountryDispatch
}