
import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link, useParams } from 'react-router-dom';
import Header from "../../components/Header/Header";
import * as favoriteAPI from '../../utils/favoriteApi'
import { useState } from "react";


function CountryPage({ countryPage, user, handleLogout }) {    
    const { continentName } = useParams()

    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState('')


    async function addFavorite(favorite) {
        
        const data = await favoriteAPI.create(favorite);

        setFavorites([data.favorite, ...favorites])
    }


    async function removeFavorite(favoriteId) {
        try {
            const data = await favoriteAPI.deleteFavorite(favoriteId)
            setFavorites([])
            console.log(data," this is the data from the server removefav")
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


    console.log(favoriteIdx)
    console.log(favorites)

    



    const favoriteColor = favoriteIdx > -1 ? "yellow" : "grey";

    return (
        <>
        <Header user={user} handleLogout={handleLogout}/>
        <Segment textAlign="center"><h1>{ continentName }</h1>                        <Icon 
                            name="star"
                            color={favoriteColor}
                            onClick={clickHandler} 
                            /></Segment>
        <Grid textAlign='center' columns={3}>
            <Grid.Row>{Array.from(countryPage).map((country)=> (
                <Grid.Column>
                    <Card>
                        <Card.Content>

                            <Segment>
                                <Link to={`/country/${country.country}/detail`}>
                                    <Image src={country?.countryInfo.flag}></Image>
                                </Link>
                            </Segment>
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

                        </Card.Content>
                    </Card>
                </Grid.Column>
            ))}</Grid.Row>
        </Grid>
        </>
    )
}


export default CountryPage;