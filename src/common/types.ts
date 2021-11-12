export interface AppStore {
    country: CountryStore
}

export interface CountryStore {
    countries: Array<Country>;
}

export interface Country {
    code?: String;
    name?: String;
    native?: String;
    phone?: String;
    continent: Continent;
    capital?: String;
    currency?: String;
    emoji?: String;
    emojiU?: String;
}

export interface Continent {
    code?: String;
    name?: String;
}

export interface Language {
    code?: String;
    name?: String;
}

export interface CountryFilter {
    continentCode: String;
    currencyCode: String;
}

export enum CountryFilterBy {
    continent = 'Continente (COD)',
    currency = 'Moneda (COD)'
}

