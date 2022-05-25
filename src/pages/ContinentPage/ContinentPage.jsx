import { useState,  } from 'react';
import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';



function ContinentPage({ user, handleLogout, continent, setCountryPage, country, handleClick }) {




    return (
        <>
        <Header user={user} handleLogout={handleLogout}/>
        <Grid textAlign='center' columns={3}>
            <Grid.Row>{Array.from(continent).map((continent) => (
                <Grid.Column>
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
                            <Icon name={'eye'} />
                        </Card.Content>
                    </Card>   
                </Grid.Column>
            ))}</Grid.Row>
        </Grid>
        </>
    )
}

export default ContinentPage