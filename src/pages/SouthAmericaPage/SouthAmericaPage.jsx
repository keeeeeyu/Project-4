import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import SaPostCard from "../../components/SaPostCard/SaPostCard"


function SouthAmericaPage({ southAmerica }) {
    return (
        <>
        <SaPostCard southAmerica={southAmerica} />
        </>
    )
}

export default SouthAmericaPage