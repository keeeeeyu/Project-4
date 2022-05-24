import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import OcPostCard from "../../components/OcPostCard/OcPostCard"
import Header from "../../components/Header/Header"


function Oceania({ oceania }) {
    return (
        <>
        <Header />
        <OcPostCard oceania={oceania} />
        </>
    )
}

export default Oceania