
export interface State<T> {
    response: T;
    error: boolean;
    isLoading: boolean;
}

export type Action<T> = { type: 'FETCH_SUCCESS', payload: T }
    | { type: 'FETCH_REQUEST' }
    | { type: 'FETCH_ERROR' };


export type Dispatch<T> = (type: Action<T>) => void;