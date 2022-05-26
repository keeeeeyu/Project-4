
import { Card, CardContent, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link, useParams } from 'react-router-dom';
import Header from "../../components/Header/Header";
import * as favoriteAPI from '../../utils/favoriteApi'
import { useState, useEffect } from "react";
import mappingService from "../../utils/mappingService";
import CountryPostCard from "../../components/CountryPostCard/CountryPostCard";


function CountryPage({ user, country, countryPage , setCountryPage, setCountry}) {    
    const { continentName } = useParams()
    // const [countryPage, setCountryPage] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState('')

    

    async function addFavorite() {
        
        const data = await favoriteAPI.create();

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
    <Header user={user}/>
    <Segment textAlign="center"><h1>{ continentName }</h1></Segment>
        <Grid textAlign='center' columns={3}>
            <Grid.Row>{Array.from(countryPage).map((country, index)=> (
                <Grid.Column key={index}>
                    <CountryPostCard 
                    removeFavorite={removeFavorite} 
                    addFavorite={addFavorite} 
                    favorites={favorites}
                    user={user}
                    />
                </Grid.Column>
            ))}</Grid.Row>
            </Grid>

        </>
    )
}


export default CountryPage;