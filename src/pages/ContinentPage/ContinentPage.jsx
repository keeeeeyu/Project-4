import React, { useState,  } from 'react';
import { Card, Grid, Image, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';



function ContinentPage({ user, handleLogout, continent, setCountryPage, country }) {
    
    
    function handleClick(e) {
        if(e.target.className === 'ui image Africa') {
          setCountryPage(country.africa)
        } else if(e.target.className === 'ui image Asia') {
          setCountryPage(country.asia)
        } else if(e.target.className === 'ui image Europe') {
          setCountryPage(country.europe)
        } else if(e.target.className === 'ui image North America') {
          setCountryPage(country.northAmerica)
        } else if(e.target.className === 'ui image South America') {
          setCountryPage(country.southAmerica)
        } else if(e.target.className === 'ui image Australia-Oceania') {
          setCountryPage(country.oceania)
        }
      }
    return (
        <>
        <Header user={user} handleLogout={handleLogout}/>
        
        <Grid textAlign='center' columns={3}>
            <Grid.Row>{Array.from(continent).map((continent, index) => (
                <Grid.Column key={index}>
                    <Card>
                        <Card.Content>
                            <Link onClick={handleClick} to={`/country/${continent.continent}`}>
                                <Image className={continent.continent} src={continent.continentImg}></Image>
                            </Link>
                            <Segment>{continent?.continent}</Segment>
                            <Segment>
                                Total Cases: {continent?.cases}<br/>
                                Active: {continent?.active}<br/>
                                Recovered: {continent?.recovered}<br/>
                                Deaths: {continent?.deaths}<br/>
                                Today Cases: {continent?.todayCases}<br/>
                                Today Deaths: {continent?.todayDeaths}<br/>
                                Population: {continent?.population}
                            </Segment>
                        </Card.Content>
                    </Card>   
                </Grid.Column>
            ))}</Grid.Row>
        </Grid>
        
        </>
    )
}

export default ContinentPage