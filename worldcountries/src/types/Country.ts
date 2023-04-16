export interface CountryTS {
    name: string,
    nativeName: string,
    population: number,
    region: string,
    subRegion: string,
    capital: string,
    flags: {
        png: string
    },
    topLevelDomain: [
        string
    ],
    currencie: [
        {
            name: string
        }
    ],
    languages: [
        {
            name: string
        }
    ],
    borders: [
        string
    ]
}