import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import AfPostCard from "../../components/AfPostCard/AfPostCard";
import Header from "../../components/Header/Header";


function AfricaPage({ africa }) {
    
    return (
        <>
        <Header />
        <AfPostCard africa={africa} />
        </>
    )
}


export default AfricaPage;