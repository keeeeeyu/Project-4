import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import AsPostCard from "../../components/AsPostCard/AsPostCard"




function asiaPage({asia}) {
    return (
        <>
        <AsPostCard asia={asia}/>
        </>
    )
}


export default asiaPage