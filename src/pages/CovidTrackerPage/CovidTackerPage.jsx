import { useEffect } from 'react';
import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'




export default function covidTrackerPage({user, handleLogout, continent}) {


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
                                Total Cases: {continent[5].cases}<br/>
                                Active: {continent[5].active}<br/>
                                Recovered: {continent[5].recovered}<br/>
                                Deaths: {continent[5].deaths}<br/>
                                Today Deaths: {continent[5].todayCases}<br/>
                                Population: {continent[5].population}
                            </Segment>
                            <i class="eye icon"></i>
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
                                Total Cases: {continent[1].cases}<br/>
                                Active: {continent[1].active}<br/>
                                Recovered: {continent[1].recovered}<br/>
                                Deaths: {continent[1].deaths}<br/>
                                Today Deaths: {continent[1].todayCases}<br/>
                                Population: {continent[1].population}
                            </Segment>
                            <i class="eye icon"></i>
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
                                Total Cases: {continent[3].cases}<br/>
                                Active: {continent[3].active}<br/>
                                Recovered: {continent[3].recovered}<br/>
                                Deaths: {continent[3].deaths}<br/>
                                Today Deaths: {continent[3].todayCases}<br/>
                                Population: {continent[3].population}
                            </Segment>
                            <i class="eye icon"></i>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Image src="https://i.imgur.com/NASaccn.png"></Image>
                            <Segment>North America</Segment>
                            <Segment>
                                Total Cases: {continent[0].cases}<br/>
                                Active: {continent[0].active}<br/>
                                Recovered: {continent[0].recovered}<br/>
                                Deaths: {continent[0].deaths}<br/>
                                Today Deaths: {continent[0].todayCases}<br/>
                                Population: {continent[0].population}
                            </Segment>
                            <i class="eye icon"></i>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Image src="https://i.imgur.com/W3BeSZE.jpg"></Image>
                            <Segment>Australia-Oceania</Segment>
                            <Segment>
                                Total Cases: {continent[4].cases}<br/>
                                Active: {continent[4].active}<br/>
                                Recovered: {continent[4].recovered}<br/>
                                Deaths: {continent[4].deaths}<br/>
                                Today Deaths: {continent[4].todayCases}<br/>
                                Population: {continent[4].population}
                            </Segment>
                            <i class="eye icon"></i>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Image src="https://i.imgur.com/Mml9plE.jpg"></Image>
                            <Segment>South America</Segment>
                            <Segment>
                                Total Cases: {continent[2].cases}<br/>
                                Active: {continent[2].active}<br/>
                                Recovered: {continent[2].recovered}<br/>
                                Deaths: {continent[2].deaths}<br/>
                                Today Deaths: {continent[2].todayCases}<br/>
                                Population: {continent[2].population}
                            </Segment>
                            <i class="eye icon"></i>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </>
    )
}