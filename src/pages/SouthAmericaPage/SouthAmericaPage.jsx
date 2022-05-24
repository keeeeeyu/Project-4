import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import SaPostCard from "../../components/SaPostCard/SaPostCard";
import Header from "../../components/Header/Header";

function SouthAmericaPage({ southAmerica }) {
    return (
        <>
        <Header />
        <SaPostCard southAmerica={southAmerica} />
        </>
    )
}

export default SouthAmericaPage;