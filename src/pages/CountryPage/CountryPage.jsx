import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";


function CountryPage({ countryPage }) {
    
    
    return (
        <>
        <Header />
        <Grid textAlign='center' columns={3}>
            <Grid.Row>{Array.from(countryPage).map((a)=> (
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


export default CountryPage;