
import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link, useParams } from 'react-router-dom';
import Header from "../../components/Header/Header";
import * as favoriteAPI from '../../utils/favoriteApi'
import { useState } from "react";


function CountryPage({ countryPage, user }) {    
    const { continentName } = useParams()

    const [favorites, setFavorites] = useState();

    async function handleClick(favorite) {
        console.log(favorite);
        const data = await favoriteAPI.create(favorite);
        console.log(data, 'this is favorite', data, "data variable")
        setFavorites((favorites) => [data.favorite, ...favorites])
    }


    // const [error, setError] = useState()

    // async function addFavorite(favoriteId){
    //     try {
    //       const data = await favoriteAPI.create(favoriteId)
    //       console.log(data, ' <- the response from the server when we make a like');
    //     } catch(err){
    //       console.log(err)
    //       setError(err.message)
    //     }
    //   }
    
    // async function removeFavorite(favoriteId){
    //     try {
    //       const data = await favoriteAPI.removeFavorite(favoriteId);
    //       console.log(data, '<-  this is the response from the server when we remove a like')
          
    //     } catch(err){
    //       console.log(err);
    //       setError(err.message);
    //     }
    //   }

    // const favoriteIndex = favorites.findIndex(
    //     (favorite) => favorite.userId === user._id
    // )

    // const clickHandler =
    //     favoriteIndex > -1
    //     ? () => removeFavorite(favorites[favoriteIndex]._id)
    //     : () => addFavorite(favorites._id)

    // const favoriteColor = favoriteIndex > -1 ? 'yellow' : 'white'
    return (
        <>
        <Header />
        <Segment textAlign="center"><h1>{ continentName }</h1></Segment>
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
                            <Icon 
                            name="star"
                            // color={favoriteColor}
                            onClick={handleClick} 
                            />
                        </Card.Content>
                    </Card>
                </Grid.Column>
            ))}</Grid.Row>
        </Grid>
        </>
    )
}


export default CountryPage;