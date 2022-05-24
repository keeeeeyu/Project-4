import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import EuPostCard from "../../components/EuPostCard/EuPostCard"


function EuropePage({europe}) {

    return (
        <>
        <EuPostCard europe={europe}/>
        </>
    )
}

export default EuropePage