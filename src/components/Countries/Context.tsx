import React from 'react';
import { Country,  } from '../../types/Country';
import { State as fetchState } from '../../types/useFetch';
import { useFetch } from '../../hooks/useFetch';

type State = fetchState<Country[]>;
type ContextAction<T> = { type: 'INIT', payload: T }
    | { type: 'NEXT_PAGE' }
    | { type: 'PREV_PAGE' };

type Action = ContextAction<Country[]>;
type Dispatch = (type: Action) => void;

type ProviderProps = { children: React.ReactNode }

interface ContextState extends fetchState<Country[]> {
    countries: Country[];
    currentPage: number;
    size: number;
}

const DataContext = React.createContext<ContextState | undefined>(undefined);
const DispatchContext = React.createContext<Dispatch | undefined>(undefined);


const reducer = (state: State, action: Action) => {
    switch(action.type) {
        case 'INIT':
            return {
                ...state,
                countries: state.response && state.response.slice(20) || [],
                currentPage: 1,
                size: state.response && state.response.length,
            }
        default: return state;
    }
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
    const { response, isLoading, error } = useFetch<Country[]>('/all');
    const [state, dispatch] = React.useReducer(reducer, { response, isLoading, error });
    return (
        <DataContext.Provider value={state as ContextState}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </DataContext.Provider>
    )
}

const useCountryData = () => {
    const context: ContextState | undefined = React.useContext(DataContext);
    console.log({ context })
    if (context === undefined) {
        throw new Error(`DataContext must be within a DataContextProvider`);
    }
    return context;
}

const useCountryDispatch = () => {
    const context: Dispatch | undefined = React.useContext(DispatchContext);
    if (context === undefined) {
        throw new Error(`DataContext must be within a DispatchContextProvider`);
    }
    return context;
}

export {
    Provider,
    useCountryData,
    useCountryDispatch
}