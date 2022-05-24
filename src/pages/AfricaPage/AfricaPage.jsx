import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import AfPostCard from "../../components/AfPostCard/AfPostCard"



function AfricaPage({africa}) {
    
    return (
        <>
        <AfPostCard africa={africa} />
        </>
    )
}


export default AfricaPage