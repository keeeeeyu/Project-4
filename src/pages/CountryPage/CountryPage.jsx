
import { Card, CardContent, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link, useParams } from 'react-router-dom';
import Header from "../../components/Header/Header";
import * as favoriteAPI from '../../utils/favoriteApi'
import { useState, useEffect } from "react";
import mappingService from "../../utils/mappingService";


function CountryPage({ user, country, countryPage ,handleLogout, setCountryPage, setCountry}) {    
    const { continentName } = useParams()
    // const [countryPage, setCountryPage] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState('')

    

    async function addFavorite(favorite) {
        
        const data = await favoriteAPI.create(favorite);

        setFavorites([data.favorite, ...favorites])
    }


    async function removeFavorite(favoriteId) {
        try {
            const data = await favoriteAPI.deleteFavorite(favoriteId)
            setFavorites([data])
        } catch(err){

            setError(err.message)
        }
    }

    const favoriteIdx = favorites.findIndex(
        (favorite) => favorite.userId === user._id
    );

    const clickHandler =
        favoriteIdx > -1
        ? () => removeFavorite(favorites[favoriteIdx]._id)
        : () => addFavorite(favorites._id)    

    const favoriteColor = favoriteIdx > -1 ? "yellow" : "grey";
    


//     useEffect(()=>{
//     if(continentName === 'Asia'){
//         setCountryPage(country.asia)
//     } else if(continentName === 'Africa') {
//         setCountryPage(country.africa)
//     } else if(continentName === 'Europe') {
//         setCountryPage(country.europe)
//     } else if(continentName === 'North America') {
//         setCountryPage(country.northAmerica)
//     } else if(continentName === 'South America') {
//         setCountryPage(country.southAmerica)
//     } else if(continentName === 'Australia-Oceania') {
//         setCountryPage(country.oceania)
//     }
// },[])

    // console.log(countryPage)

    return (
        <>

        <Header user={user} handleLogout={handleLogout}/>
        <Segment textAlign="center"><h1>{ continentName }</h1>                        <Icon 
                            name="star"
                            color={favoriteColor}
                            onClick={clickHandler} 
                            /></Segment>


        <Grid textAlign='center' columns={3}>
            <Grid.Row>{Array.from(countryPage).map((country, index)=> (
                <Grid.Column key={index}>
                    <Card key={favorites._id} >
                        <Card.Content>
                            <Segment>
                                <Link to={`/country/${country.country}/detail`}>
                                    <Image src={country?.countryInfo.flag}></Image>
                                </Link>
                            </Segment>
                        </Card.Content>
                        <Card.Content>
                            <Segment>{country?.country}</Segment>
                            <Segment>
                                Total Cases: {country?.cases}<br/>
                                Active: {country?.active}<br/>
                                Recovered: {country?.recovred}<br/>
                                Deaths: {country?.deaths}<br/>
                                Today Cases: {country?.todayCases}<br/>
                                Today Deaths: {country?.todayDeaths}<br/>
                                Population: {country?.population}
                            </Segment>
                            <Card.Content>
                            <Icon name="star" color={favoriteColor} onClick={clickHandler} />
                            </Card.Content>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            ))}</Grid.Row>
            </Grid>

        </>
    )
}


export default CountryPage;