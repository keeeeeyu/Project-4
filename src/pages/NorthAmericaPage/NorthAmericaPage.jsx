import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import NaPostCard from "../../components/NaPostCard/NaPostCard"



function NorthAmericaPage({ northAmerica }) {
    return (
        <>
        <NaPostCard northAmerica={northAmerica} />
        </>
    )
}

export default NorthAmericaPage