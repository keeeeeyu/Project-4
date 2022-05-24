
function filterEurope(continent) {
    const euData = continent.filter(countries => countries.continent === 'Europe')
    return euData;
}



const mappingService = {
  filterEurope
};

export default mappingService;
