
function filterEurope(continent) {
    const euData = continent.filter(countries => countries.continent === 'Europe')
    return euData;
}

function filterAfrica(continent) {
    const afData = continent.filter(countries => countries.continent === 'Africa')
}

function filterAsia(continent) {
    const asData = continent.filter(countries => countries.continent === 'Asia')
}

function filterNorthAmerica(continent) {
    const naData = continent.filter(countries => countries.continent === 'North America')
}
const mappingService = {
  filterEurope,
  filterAfrica,
  filterAsia,
  filterNorthAmerica,
};

export default mappingService;
