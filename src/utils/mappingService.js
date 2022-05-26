function mappedCountry(country) {
    const mappedContinent = {
        asia: [],
        africa: [],
        northAmerica: [],
        southAmerica: [],
        europe: [],
        oceania: []
        };

    Array.from(country).map(countries => {
        countries = {...countries, favorited: -1}

        if(countries.continent === 'Europe') {
            mappedContinent.europe.push(countries)
        } else if (countries.continent === 'Asia') {
            mappedContinent.asia.push(countries)
        } else if (countries.continent === 'Africa') {
            mappedContinent.africa.push(countries)
        } else if (countries.continent === 'North America') {
            mappedContinent.northAmerica.push(countries)
        } else if (countries.continent === 'South America') {
            mappedContinent.southAmerica.push(countries)
        } else if (countries.continent === 'Australia-Oceania') {
            mappedContinent.oceania.push(countries)
        }
        return null;
    })
    return mappedContinent;
}

const mappingService = {
  mappedCountry
};

export default mappingService;
