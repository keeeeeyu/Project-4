import { useState } from 'react';
import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import * as watchAPI from '../../utils/viewWatchListApi'




export default function CovidTrackerPage({ user, handleLogout, continent }) {


    console.log(user,'<==user')
    
    return (
        <>
        <Header user={user} handleLogout={handleLogout}/>
        <Grid textAlign='center' columns={3}>
            <Grid.Row>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Link to="/africa">
                                <Image src="https://i.imgur.com/wt9gbQ0.jpg"></Image>
                            </Link>
                            <Segment>Africa</Segment>
                            <Segment>
                                Total Cases: {continent[5]?.cases}<br/>
                                Active: {continent[5]?.active}<br/>
                                Recovered: {continent[5]?.recovered}<br/>
                                Deaths: {continent[5]?.deaths}<br/>
                                Today Cases: {continent[5]?.todayCases}<br/>
                                Today Deaths: {continent[5]?.todayDeaths}<br/>
                                Population: {continent[5]?.population}
                            </Segment>
                            <Icon name={'eye'} />
                        </Card.Content>
                    </Card>   
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Link to="/asia">
                                <Image src="https://i.imgur.com/AJutcNz.jpg"></Image>
                            </Link>
                            <Segment>Asia</Segment>
                            <Segment>
                                Total Cases: {continent[1]?.cases}<br/>
                                Active: {continent[1]?.active}<br/>
                                Recovered: {continent[1]?.recovered}<br/>
                                Deaths: {continent[1]?.deaths}<br/>
                                Today Cases: {continent[1]?.todayCases}<br/>
                                Today Deaths: {continent[1]?.todayDeaths}<br/>
                                Population: {continent[1]?.population}
                            </Segment>
                            <Icon name={'eye'} />
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Link to="/europe">
                                <Image src="https://i.imgur.com/rkHn7rN.jpg"></Image>
                            </Link>
                            <Segment>Europe</Segment>
                            <Segment>
                                Total Cases: {continent[3]?.cases}<br/>
                                Active: {continent[3]?.active}<br/>
                                Recovered: {continent[3]?.recovered}<br/>
                                Deaths: {continent[3]?.deaths}<br/>
                                Today Cases: {continent[3]?.todayCases}<br/>
                                Today Deaths: {continent[3]?.todayDeaths}<br/>
                                Population: {continent[3]?.population}
                            </Segment>
                            <Icon name={'eye'} />
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Link to="/north-america">
                                <Image src="https://i.imgur.com/NASaccn.png"></Image>
                            </Link>
                            <Segment>North America</Segment>
                            <Segment>
                                Total Cases: {continent[0]?.cases}<br/>
                                Active: {continent[0]?.active}<br/>
                                Recovered: {continent[0]?.recovered}<br/>
                                Deaths: {continent[0]?.deaths}<br/>
                                Today Cases: {continent[0]?.todayCases}<br/>
                                Today Deaths: {continent[0]?.todayDeaths}<br/>
                                Population: {continent[0]?.population}
                            </Segment>
                            <Icon name={'eye'} />
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Link to="/australia-oceania">
                                <Image src="https://i.imgur.com/W3BeSZE.jpg"></Image>
                            </Link>
                            <Segment>Australia-Oceania</Segment>
                            <Segment>
                                Total Cases: {continent[4]?.cases}<br/>
                                Active: {continent[4]?.active}<br/>
                                Recovered: {continent[4]?.recovered}<br/>
                                Deaths: {continent[4]?.deaths}<br/>
                                Today Cases: {continent[4]?.todayCases}<br/>
                                Today Deaths: {continent[4]?.todayDeaths}<br/>
                                Population: {continent[4]?.population}
                            </Segment>
                            <Icon name={'eye'} />
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Link to="/south-america">
                                <Image src="https://i.imgur.com/Mml9plE.jpg"></Image>
                            </Link>
                            <Segment>South America</Segment>
                            <Segment>
                                Total Cases: {continent[2]?.cases}<br/>
                                Active: {continent[2]?.active}<br/>
                                Recovered: {continent[2]?.recovered}<br/>
                                Deaths: {continent[2]?.deaths}<br/>
                                Today Cases: {continent[2]?.todayCases}<br/>
                                Today Deaths: {continent[2]?.todayDeaths}<br/>
                                Population: {continent[2]?.population}
                            </Segment>
                            <Icon name={'eye'} />
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </>
    )
};