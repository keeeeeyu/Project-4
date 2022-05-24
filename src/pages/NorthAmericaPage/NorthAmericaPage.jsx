import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import NaPostCard from "../../components/NaPostCard/NaPostCard";
import Header from "../../components/Header/Header";


function NorthAmericaPage({ northAmerica }) {
    return (
        <>
        <Header />
        <NaPostCard northAmerica={northAmerica} />
        </>
    )
}

export default NorthAmericaPage;