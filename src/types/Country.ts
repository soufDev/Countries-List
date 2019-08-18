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