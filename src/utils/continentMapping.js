

const continentImg = {
    naImg: "https://i.imgur.com/NASaccn.png", 
    asImg: "https://i.imgur.com/AJutcNz.jpg", 
    saImg: "https://i.imgur.com/Mml9plE.jpg", 
    euImg: "https://i.imgur.com/rkHn7rN.jpg", 
    ocImg: "https://i.imgur.com/W3BeSZE.jpg", 
    afImg: "https://i.imgur.com/wt9gbQ0.jpg"
}



function mapContinent(continents) {
    const newContinent = Array.from(continents).map((continent) => {
        if(continent.continent === 'North America') {
            continent = ({...continent, continentImg: continentImg.naImg})
        } else if(continent.continent === 'Asia') {
            continent = ({...continent, continentImg: continentImg.asImg})
        } else if(continent.continent === 'South America') {
            continent = ({...continent, continentImg: continentImg.saImg})
        } else if(continent.continent === 'Europe') {
            continent = ({...continent, continentImg: continentImg.euImg})
        } else if(continent.continent === 'Australia-Oceania') {
            continent = ({...continent, continentImg: continentImg.ocImg})
        } else if(continent.continent === 'Africa') {
            continent = ({...continent, continentImg: continentImg.afImg})
        }
        return continent
    })
    return newContinent
}


const continentMapping = {
    mapContinent
}

export default continentMapping