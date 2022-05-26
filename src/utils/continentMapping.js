

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
            continent = ({...continent, continentImg: continentImg.naImg, continentParam: "northAmerica"})
        } else if(continent.continent === 'Asia') {
            continent = ({...continent, continentImg: continentImg.asImg, continentParam: "asia"})
        } else if(continent.continent === 'South America') {
            continent = ({...continent, continentImg: continentImg.saImg, continentParam: "southAmerica"})
        } else if(continent.continent === 'Europe') {
            continent = ({...continent, continentImg: continentImg.euImg, continentParam: "europe"})
        } else if(continent.continent === 'Australia-Oceania') {
            continent = ({...continent, continentImg: continentImg.ocImg, continentParam: "oceania"})
        } else if(continent.continent === 'Africa') {
            continent = ({...continent, continentImg: continentImg.afImg, continentParam: "africa"})
        }
        return continent
    })
    return newContinent
}


const continentMapping = {
    mapContinent
}

export default continentMapping