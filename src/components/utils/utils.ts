import { Country } from '../../types/Country';
export const sortByProperty = (array: any, property: any, asc: boolean) => {
    const ascSort = (a: any, b: any) => a[property] > b[property] ? 1 : -1;
    const descSort = (a: any, b: any) => a[property] < b[property] ? 1 : -1;
    return array.sort((a: any , b: any) => asc ? ascSort(a, b) : descSort(a, b))
}

export const searchByName = (array: Country[], name: string) => {
    if (name === '') return array;
    return array.filter((country: Country) => country.name.toLowerCase() === name.toLowerCase());
}

export const filterByCurrency = (array: Country[], currency: string) => {
    if (currency === "all") return array;
    return array.filter((country: Country) => country.currencies.includes(currency.toUpperCase()));
}