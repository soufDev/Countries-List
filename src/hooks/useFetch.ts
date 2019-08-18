import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { State, Action } from '../types/useFetch';


export const fetchData = <T>(url: string): Promise<T> => {
    return axios.get<T>(url, {
        headers: {
            "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
	        "x-rapidapi-key": "a020cc16ffmsha6c2fd7eb13763dp128656jsn68dd7bd70ea5"
        }
    }
    ).then((response: AxiosResponse<T>) => response.data);
}

const initialState = {
    response: [],
    isLoading: false,
    error: false
};

const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {
                ...state,
                isLoading: true,
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                response: action.payload,
            };
        default:
            return state;
    }
}


export function useFetch<T>(url: string): State<T> {
    const [{ response, isLoading, error }, dispatch] = React.useReducer(reducer, initialState);
    React.useEffect(() => {
        dispatch({ type: 'FETCH_REQUEST' });
        fetchData<T>(url).then((data: T) => {
            dispatch({ type: "FETCH_SUCCESS", payload: data });
        }).catch(() => {
            dispatch({ type: "FETCH_ERROR" });
        });
    }, [url])
    return {
        response,
        isLoading,
        error,
    } as State<T>
}