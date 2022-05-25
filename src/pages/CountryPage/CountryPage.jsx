
import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link, useParams } from 'react-router-dom';
import Header from "../../components/Header/Header";
import CountryPostCard from "../../components/CountryPostCard/CountryPostCard"
import * as favoriteAPI from '../../utils/favoriteApi'
import { useState } from "react";


function CountryPage({ countryPage, user }) {    


    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState('')



    async function addFavorite(favorite) {
        
        const data = await favoriteAPI.create(favorite);
        console.log(data, 'this is add favorite data')
        setFavorites([data.favorite, ...favorites])
    }
    console.log(favorites,"<--------favorites")

    async function removeFavorite(favoriteId) {
        try {
            const data = await favoriteAPI.removeFavorite(favoriteId)
            console.log(data,'<----- this is remove favorite')
        } catch(err){
            console.log(err)
            setError(err.message)
        }
    }

    const favoriteIdx = favorites.findIndex(
        (favorite) => favorite.userId === user._id
    );
    console.log(favoriteIdx)
    const favoriteColor = favoriteIdx > -1 ? "yellow" : "grey";

    const clickHandler = 
        favoriteIdx > -1
        ? () => removeFavorite(favorites[favoriteIdx]._id)
        : () => addFavorite(favorites._id)    



    return (
        <>
        <Header />
        <CountryPostCard countryPage={countryPage} favoriteColor={favoriteColor} clickHandler={clickHandler}/>
        <Icon 
                            name="star"
                            color={favoriteColor}
                            onClick={clickHandler} 
                            />
        </>
    )
}


export default CountryPage;