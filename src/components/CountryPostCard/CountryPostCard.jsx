import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react'


function CountryPostCard({ country, favoriteColor, setCountryPage }) {
    


    

    return (
        <>
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
                        color={favoriteColor}
                        onClick={()=>{
                            setCountryPage({favorited: 1})
                            
                            console.log(country)
                        }}
                        />
                    </Card.Content>
        </>
    )
}

export default CountryPostCard