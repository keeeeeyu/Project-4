import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Segment, Image } from 'semantic-ui-react'
import Header from "../../components/Header/Header";

function CountryDetail() {
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
        <Header />
        <Container>
            <Segment><Image src={detail.countryInto.flag}/></Segment>
        </Container>
        </>
    )
}

export default CountryDetail