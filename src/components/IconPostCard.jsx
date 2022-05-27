import { Card, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react'
import userService from "../utils/userService";
import * as favoriteAPI from "../utils/favoriteApi"

function IconPostCard({ country, removeFavorite, addFavorite, user }) {
    // const data = userService.getUser();
    // setFavorites([...data.users])
    // console.log(data.user)
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState('')

    async function addFavorite(countryName) {
        // const formData = new FormData()
        // formData.append("country", countryName)
        const countryObj = {"country": countryName}
        const data = await favoriteAPI.create(countryObj);
        setFavorites([data.user, ...favorites])
        console.log(data)
        setFavorites([data.favorite, ...favorites])
    }

    console.log(favorites,"<----fav")

    async function removeFavorite(favoriteId) {
        try {
            const data = await favoriteAPI.deleteFavorite(favoriteId)
            setFavorites([data])
        } catch(err){

            setError(err.message)
        }
    }


    async function getUsers() {
        try {
            const data = await userService.getUser();
            setFavorites([...data.users])
            console.log(data.user,'<------ from country page')
        } catch (err) {
            setError(err.message)
        }
    }
    
    useEffect(() => {
        getUsers();
    }, []);



    const favoriteIdx = favorites.findIndex(
        (favorite) => favorite?.country === user._id
    );

    console.log(favoriteIdx)
    
    const clickHandler =
        favoriteIdx > -1
        ? () => removeFavorite(favorites[favoriteIdx]._id)
        : () => addFavorite(country?.country)    

    const favoriteColor = favoriteIdx > -1 ? "yellow" : "grey";

    return (
        <>
        <Icon name="star" color={favoriteColor} onClick={clickHandler} />
        </>
    )

    }
export default IconPostCard