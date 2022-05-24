import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import React from "react"


function AfPostCard({ africa }) {
    console.log({africa})
    // const mapEurope = europe.map(a => a.countryInfo.flag)
    // console.log(mapEurope,"<------ maps")


    // const flagMap = europe.map(a => a.countryInfo.flag)
    // console.log(flagMap,"<------- flag")

    return (
        
        <> 
        <Grid textAlign='center' columns={3}>
            <Grid.Row>{Array.from(africa).map((a)=> (
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Image src={a?.countryInfo.flag}></Image>
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