import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import EuPostCard from "../../components/EuPostCard/EuPostCard"


function EuropePage({europe}) {
    console.log(europe,"<---------euro")
    return (
        <>
       
        <EuPostCard europe={europe}/>

        
        </>
    )
}

export default EuropePage