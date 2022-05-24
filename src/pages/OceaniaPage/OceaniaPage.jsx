import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import OcPostCard from "../../components/OcPostCard/OcPostCard"


function Oceania({ oceania }) {
    return (
        <>
        <OcPostCard oceania={oceania} />
        </>
    )
}

export default Oceania