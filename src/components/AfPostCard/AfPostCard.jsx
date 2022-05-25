import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react"
import { Link, useParams } from 'react-router-dom'
import countryDetail from "../Detail/Detail"
import React from "react"


function AfPostCard({ africa, setCountryName }) {

    
    
    return (
        
        <> 
        <Grid textAlign='center' columns={3}>
            <Grid.Row>{Array.from(africa).map((a)=> (
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Link to={`/africa/${a?.country}`} >
                            <Image src={a?.countryInfo.flag}></Image>
                            </Link>
                            <Segment>{a?.country}</Segment>
                            <Segment>
                                Total Cases: {a?.cases}<br/>
                                Active: {a?.active}<br/>
                                Recovered: {a?.recovred}<br/>
                                Deaths: {a?.deaths}<br/>
                                Today Cases: {a?.todayCases}<br/>
                                Today Deaths: {a?.todayDeaths}<br/>
                                Population: {a?.population}
                            </Segment>
                            <i class="eye icon"></i>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            ))}</Grid.Row>
        </Grid>

        </>
    )
}

export default AfPostCard