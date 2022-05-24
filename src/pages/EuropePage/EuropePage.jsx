import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import EuPostCard from "../../components/EuPostCard/EuPostCard"


function EuropePage({europe}) {

    return (
        <>
        {europe.map((europes) => { 
        return <EuPostCard europes={europes}/>
    })}
        
        </>
    )
}

export default EuropePage