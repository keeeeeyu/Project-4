
function filterEurope(continent) {
    const euData = continent.filter(countries => countries.continent === 'Europe')
    return euData;
}

function filterAfrica(continent) {
    const afData = continent.filter(countries => countries.continent === 'Africa')
    return afData;
}

function filterAsia(continent) {
    const asData = continent.filter(countries => countries.continent === 'Asia')
    return asData;
}

function filterNorthAmerica(continent) {
    const naData = continent.filter(countries => countries.continent === 'North America')
    return naData;
}

function filterSouthAmerica(continent) {
    const saData = continent.filter(countries => countries.continent === 'South America')
    return saData;
}

function filterOceania(continent) {
    const ocData = continent.filter(countries => countries.continent === 'Australia-Oceania')
    return ocData;
}

const mappingService = {
  filterEurope,
  filterAfrica,
  filterAsia,
  filterNorthAmerica,
  filterSouthAmerica,
  filterOceania

};

export default mappingService;
