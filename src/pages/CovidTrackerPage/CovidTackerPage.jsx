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
                            <Image src="https://i.imgur.com/wt9gbQ0.jpg"></Image>
                            <Segment>Africa</Segment>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Image src="https://i.imgur.com/AJutcNz.jpg"></Image>
                            <Segment>Asia</Segment>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Image src="https://i.imgur.com/rkHn7rN.jpg"></Image> 
                            <Segment>Europe</Segment>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Image src="https://i.imgur.com/NASaccn.png"></Image>
                            <Segment>North America</Segment>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Image src="https://i.imgur.com/W3BeSZE.jpg"></Image>
                            <Segment>Oceania</Segment>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Image src="https://i.imgur.com/Mml9plE.jpg"></Image>
                            <Segment>South America</Segment>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </>
    )
}