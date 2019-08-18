import axios from 'axios';
import { Country } from '../../types/Country';

export const getAll = (): Promise<Country[]> => {
    return axios.get('https://restcountries-v1.p.rapidapi.com/all', {
        headers: {
            "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
	        "x-rapidapi-key": "a020cc16ffmsha6c2fd7eb13763dp128656jsn68dd7bd70ea5"
        }
    }).then(response => response.data);
}
