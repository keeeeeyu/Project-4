import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react'


function CountryPostCard({ country, removeFavorite, addFavorite, favorites, user}) {
    

    const favoriteIdx = favorites.findIndex(
        (favorite) => favorite.country === user._id
    );

    const clickHandler =
        favoriteIdx > -1
        ? () => removeFavorite(favorites[favoriteIdx]._id)
        : () => addFavorite(country?.country)    

    // const favoriteColor = favoriteIdx > -1 ? "yellow" : "grey";
    

    

    return (
        <>
        <Card>
                        <Card.Content>
                        
                        <Segment>
                            <Link to={`/country/${country?.country}/detail`}>
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
                        onClick={clickHandler}
                        />
                    </Card.Content>
                    </Card>
        </>
    )
}

export default CountryPostCard