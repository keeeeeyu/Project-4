
import { Card, CardContent, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link, useParams } from 'react-router-dom';
import Header from "../../components/Header/Header";
import * as favoriteAPI from '../../utils/favoriteApi'
import { useState, useEffect } from "react";
import mappingService from "../../utils/mappingService";
import CountryPostCard from "../../components/CountryPostCard/CountryPostCard";
import userService from "../../utils/userService";
import IconPostCard from "../../components/IconPostCard";


function CountryPage({ user, country, countryPage , setCountryPage, setCountry}) {    
    const { continentName } = useParams()
    // const [countryPage, setCountryPage] = useState("");
    // const [favorites, setFavorites] = useState([]);
    // const [error, setError] = useState('')


    // console.log(user)
    
    // async function addFavorite(countryName) {
    //     // const formData = new FormData()
    //     // formData.append("country", countryName)
    //     const countryObj = {"country": countryName}
    //     const data = await favoriteAPI.create(countryObj);
    //     console.log(data)
    //     setFavorites([data.favorite, ...favorites])
    // }


    // async function removeFavorite(favoriteId) {
    //     try {
    //         const data = await favoriteAPI.deleteFavorite(favoriteId)
    //         setFavorites([data])
    //     } catch(err){

    //         setError(err.message)
    //     }
    // }


    // async function getUsers() {
    //     try {
    //         const data = await userService.getUser();
    //         setFavorites([...data.users])
    //         console.log(data.user,'<------ from country page')
    //     } catch (err) {
    //         setError(err.message)
    //     }
    // }
    
    // useEffect(() => {
    //     getUsers();
    // }, []);


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
    <Segment>
        <IconPostCard country={country} user={user}/>
    </Segment>
    <Segment textAlign="center"><h1>{ continentName }</h1></Segment>
        <Grid textAlign='center' columns={3}>
            <Grid.Row>{Array.from(countryPage).map((country, index)=> (
                <Grid.Column key={index}>
                    <CountryPostCard 
                    // removeFavorite={removeFavorite} 
                    // addFavorite={addFavorite} 
                    user={user}
                    country={country}
                    />
                </Grid.Column>
            ))}</Grid.Row>
            </Grid>

        </>
    )
}


export default CountryPage;