import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import AsPostCard from "../../components/AsPostCard/AsPostCard";
import Header from "../../components/Header/Header";




function asiaPage({ asia }) {
    return (
        <>
        <Header />
        <AsPostCard asia={asia}/>
        </>
    )
}


export default asiaPage;