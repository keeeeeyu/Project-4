import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link, useParams } from 'react-router-dom';
import Header from "../../components/Header/Header";


function CountryPage({ countryPage }) {    

    const { continentName } = useParams()

    return (
        <>
        <Header />
        <Segment textAlign="center">{ continentName }</Segment>
        <Grid textAlign='center' columns={3}>
            <Grid.Row>{Array.from(countryPage).map((country)=> (
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Link to={`/country/${country.country}/detail`}>
                                <Image src={country?.countryInfo.flag}></Image>
                            </Link>
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
                            <Icon name="star" />
                        </Card.Content>
                    </Card>
                </Grid.Column>
            ))}</Grid.Row>
        </Grid>
        </>
    )
}


export default CountryPage;