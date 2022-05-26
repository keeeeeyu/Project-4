
import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link, useParams } from 'react-router-dom';
import Header from "../../components/Header/Header";
import CountryPostCard from "../../components/CountryPostCard/CountryPostCard"
import * as favoriteAPI from '../../utils/favoriteApi'
import { useState } from "react";



function CountryPage({ countryPage, user, setCountryPage }) {    
    const { continentName } = useParams()

    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState('')


    async function addFavorite(favorite) {
        
        const data = await favoriteAPI.create(favorite);

        setFavorites([data.favorite, ...favorites])
    }


    async function removeFavorite(favoriteId) {
        try {
            const data = await favoriteAPI.removeFavorite(favoriteId)

        } catch(err){

            setError(err.message)
        }
    }

    const favoriteIdx = favorites.findIndex(
        (favorite) => favorite.userId === user._id
    );

    const favoriteColor = favoriteIdx > -1 ? "yellow" : "grey";

    function clickHandler(e) {
        
    }

    // const clickHandler =
    //     favoriteIdx > -1
    //     ? () => removeFavorite(favorites[favoriteIdx]._id)
    //     : () => addFavorite(favorites._id)    




    





    return (
        <>
        <Header />
        <Segment textAlign="center"><h1>{ continentName }</h1></Segment>
        <Grid textAlign='center' columns={3}>
            <Grid.Row>{Array.from(countryPage).sort((x, y)=>(
                 (x.favorited > y.favorited) ? -1 : 1
            )).map((country)=> {
                return (
                <Grid.Column>
                    <Card>
                        <CountryPostCard country={country} setCountryPage={setCountryPage} favoriteColor={favoriteColor} favorites={favorites}/>
                    </Card>
                </Grid.Column>
            )})}</Grid.Row>
        </Grid>
        </>
    )
}


export default CountryPage;