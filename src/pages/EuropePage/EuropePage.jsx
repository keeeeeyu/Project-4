import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import EuPostCard from "../../components/EuPostCard/EuPostCard";
import Header from "../../components/Header/Header";


function EuropePage({ europe }) {

    return (
        <>
        <Header />
        <EuPostCard europe={europe}/>
        </>
    )
}

export default EuropePage;