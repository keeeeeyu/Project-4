
import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link, useParams } from 'react-router-dom';
import Header from "../../components/Header/Header";
import * as favoriteAPI from '../../utils/favoriteApi'
import { useState } from "react";


function CountryPage({ countryPage, user }) {    
    const { continentName } = useParams()

    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState('')

    console.log(favorites,"<--- favorite")

    async function addFavorite(favorite) {
        
        const data = await favoriteAPI.create(favorite);
        console.log(data, 'this is add favorite')
        console.log(favorite);
        setFavorites([data.favorite, ...favorites])
    }
    console.log(favorites)

    async function removeFavorite(favoriteId) {
        try {
            const data = await favoriteAPI.removeFavorite(favoriteId)
            console.log(data,'<----- this is remove favorite')
        } catch(err){
            console.log(err)
            setError(err.message)
        }
    }


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
                            onClick={addFavorite} 
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