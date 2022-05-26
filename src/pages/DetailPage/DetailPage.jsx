import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Segment, Image, Card } from 'semantic-ui-react'
import Header from "../../components/Header/Header";

function CountryDetail({user}) {
    const [detail, setDetail] = useState("");
    const { countryName } = useParams();


    useEffect(() => {
    const url = `https://corona.lmao.ninja/v2/countries/${countryName}?yesterday=true&strict=true&query =`

    async function detailApiCall() {
        const response = await fetch(url)
        const data = await response.json()
        setDetail(data)
        }
        detailApiCall()
    }, [])

    return (
        <>
        <Header user={user}/>
        <Segment textAlign='center'><h1>{countryName}</h1></Segment>
        <Container>
            <Card>
            <Image src={detail?.countryInfo?.flag}/>
            </Card>
            <Segment textAlign='center'>
                Cases: {detail?.cases}<br/>
                TodayCases: {detail?.todayCases}<br/>
                Deaths: {detail?.deaths}<br/>
                Today Deaths: {detail?.todayDeaths}<br/>
                Recovered: {detail?.recovered}<br/>
                Today Recovered: {detail?.todayRecovered}<br/>
                Active: {detail?.active}<br/>
                Critical: {detail?.critical}<br/>
                Cases Per One Million: {detail?.casesPerOneMillion}<br/>
                Deaths Per One Million: {detail?.deathsPerOneMillion}<br/>
                Tests: {detail?.tests}<br/>
                Tests Per One Million: {detail?.testsPerOneMillion}<br/>
                Population: {detail?.population}<br/>
                One Case Per People: {detail?.oneCasePerPeople}<br/>
                One Death Per People: {detail?.oneDeathPerPeople}<br/>
                One Test Per People: {detail?.oneTestPerPeople}<br/>
                Active Per One Million: {detail?.activePerOneMillion}<br/>
                Recovered Per One Million: {detail?.recoveredPerOneMillion}<br/>
                Critical Per One Millon: {detail?.criticalPerOneMillion}
            </Segment>
        </Container>
        </>
    )
}

export default CountryDetail