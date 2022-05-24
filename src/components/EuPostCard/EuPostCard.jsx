import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import React from "react"


function EuPostCard({ europe }) {
    console.log(europe,"<------- europe here")
    // const mapEurope = europe.map(a => a.countryInfo.flag)
    // console.log(mapEurope,"<------ maps")


    // const flagMap = europe.map(a => a.countryInfo.flag)
    // console.log(flagMap,"<------- flag")

    return (
        
        <> 
        <Grid textAlign='center' columns={3}>
            <Grid.Row>
                <Grid.Column>
                <div>{Array.from(europe).map((a)=> (
                    <Card>
                        <Card.Content>
                            
                                <Image src={a?.countryInfo.flag}></Image>
                            
                            <Segment>{a?.country}</Segment>
                            <Segment>
                                Total Cases:<br/>
                                Active:<br/>
                                Recovered: <br/>
                                Deaths: <br/>
                                Today Cases: <br/>
                                Today Deaths: <br/>
                                Population: 
                            </Segment>
                            <i class="eye icon"></i>
                        </Card.Content>
                    </Card>
                    ))}</div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </>
    )
}

export default EuPostCard