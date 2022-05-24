import { useState } from 'react'
import { Card, Image, Segment } from "semantic-ui-react"



function CountryPostCard({euCountry}) {


    const country = Object.values(euCountry)
    const result = country.filter(countries => countries?.continent === 'Europe')



    return (
        <>
        <h1></h1>
        {/* <Card>

            <Card.Content>
                <Image src={datas} />
            </Card.Content>

        </Card> */}
        </>
    )
}

export default CountryPostCard