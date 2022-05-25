import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import continentMapping from "../../utils/continentMapping";
import mappingService from "../../utils/mappingService";
import * as favoriteAPI from "../../utils/favoriteApi";
import LandingPage from "../LandingPage/LandingPage";
import ContinentPage from "../ContinentPage/ContinentPage"
import CountryPage from "../CountryPage/CountryPage";
import DetailPage from "../DetailPage/DetailPage"




function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [countryPage, setCountryPage] = useState("");
  const [favorites, setFavorites] = useState("")
  const [error, setError] = useState("");


  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  // Continent API call
  useEffect(() => {
    const continentUrl = "https://corona.lmao.ninja/v2/continents";

    async function continentApiCall() {
      const response = await fetch(continentUrl)
      const data = await response.json()
      const mappedContinent = continentMapping.mapContinent(data)
      setContinent(mappedContinent)
    }
    continentApiCall()
  }, [])
  
  // Country API call
  useEffect(() => {
    const countryUrl = "https://corona.lmao.ninja/v2/countries"

    async function countryApiCall() {
      const response = await fetch(countryUrl)
      const data = await response.json()
      const mappedCountries = mappingService.mappedCountry(data)
      setCountry(mappedCountries)
      
    }
    countryApiCall()
  }, []) 

  function handleClick(e) {
    if(e.target.className === 'ui image Africa') {
      setCountryPage(country.africa)
    } else if(e.target.className === 'ui image Asia') {
      setCountryPage(country.asia)
    } else if(e.target.className === 'ui image Europe') {
      setCountryPage(country.europe)
    } else if(e.target.className === 'ui image North America') {
      setCountryPage(country.northAmerica)
    } else if(e.target.className === 'ui image South America') {
      setCountryPage(country.southAmerica)
    } else if(e.target.className === 'ui image Australia-Oceania') {
      setCountryPage(country.oceania)
    }
  }
  

  if (user) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path="/country/:countryName/detail" element={<DetailPage />} />
        <Route path="/continent" element={<ContinentPage user={user} handleLogout={handleLogout} continent={continent} handleClick={handleClick}/>} />
        <Route path="/country/:continentName" element={<CountryPage countryPage={countryPage} user={user} favorites={favorites}/>} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
      <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
