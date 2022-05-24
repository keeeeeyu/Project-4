
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
const mappingService = {
  filterEurope,
  filterAfrica,
};

export default mappingService;
