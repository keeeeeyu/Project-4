import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import continentMapping from "../../utils/continentMapping";
import mappingService from "../../utils/mappingService";
import LandingPage from "../LandingPage/LandingPage";
import CovidTrackerPage from "../CovidTrackerPage/CovidTackerPage";
import ContinentPage from "../ContinentPage/ContinentPage"
import AfricaPage from "../AfricaPage/AfricaPage";
import AsiaPage from "../AsiaPage/AsiaPage";
import EuropePage from "../EuropePage/EuropePage";
import NorthAmericaPage from "../NorthAmericaPage/NorthAmericaPage";
import OceaniaPage from "../OceaniaPage/OceaniaPage";
import SouthAmericaPage from "../SouthAmericaPage/SouthAmericaPage";
import Detail from "../../components/Detail/Detail"



function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [africa, setAfrica] = useState("");
  const [asia, setAsia] = useState("");
  const [europe, setEurope] = useState("");
  const [northAmerica, setNorthAmerica] = useState("");
  const [southAmerica, setSouthAmerica] = useState("");
  const [oceania, setOceania] = useState("");
  const [countryName, setCountryName] = useState("");
  


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
      console.log(mappedContinent,"<<<<<")
      setContinent(mappedContinent)
    }
    continentApiCall()
  }, [])

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

  console.log(country.asia,"<----asia")

  // Europe API call
  useEffect(() => {
    const countryUrl = "https://corona.lmao.ninja/v2/countries"

    async function countryApiCall() {
      const response = await fetch(countryUrl)
      const data = await response.json()
      const mappedEurope = mappingService.filterEurope(data)
      // console.log(mappedContinent,'<-------------')
      setEurope(mappedEurope)
      
    }
    countryApiCall()
  }, [])
  
  // Africa API call
  useEffect(() => {
    const countryUrl = "https://corona.lmao.ninja/v2/countries"

    async function countryApiCall() {
      const response = await fetch(countryUrl)
      const data = await response.json()
      const mappedAfrica = mappingService.filterAfrica(data)
      // console.log(mappedContinent,'<-------------')
      setAfrica(mappedAfrica)
      
    }
    countryApiCall()
  }, [])

  
  // Asia API call
  useEffect(() => {
    const countryUrl = "https://corona.lmao.ninja/v2/countries"

    async function countryApiCall() {
      const response = await fetch(countryUrl)
      const data = await response.json()
      const mappedAsia = mappingService.filterAsia(data)
      // console.log(mappedContinent,'<-------------')
      setAsia(mappedAsia)
      
    }
    countryApiCall()
  }, []) 

  // NA API call
  useEffect(() => {
    const countryUrl = "https://corona.lmao.ninja/v2/countries"

    async function countryApiCall() {
      const response = await fetch(countryUrl)
      const data = await response.json()
      const mappedNa = mappingService.filterNorthAmerica(data)
      // console.log(mappedContinent,'<-------------')
      setNorthAmerica(mappedNa)
      
    }
    countryApiCall()
  }, []) 
  
  // SA API call
  useEffect(() => {
    const countryUrl = "https://corona.lmao.ninja/v2/countries"

    async function countryApiCall() {
      const response = await fetch(countryUrl)
      const data = await response.json()
      const mappedSa = mappingService.filterSouthAmerica(data)
      // console.log(mappedContinent,'<-------------')
      setSouthAmerica(mappedSa)
      
    }
    countryApiCall()
  }, []) 

  // Oceania API call
  useEffect(() => {
    const countryUrl = "https://corona.lmao.ninja/v2/countries"

    async function countryApiCall() {
      const response = await fetch(countryUrl)
      const data = await response.json()
      const mappedOc = mappingService.filterOceania(data)
      // console.log(mappedContinent,'<-------------')
      setOceania(mappedOc)
      
    }
    countryApiCall()
  }, []) 

  if (user) {
    return (
      <Routes>
        <Route path="/covidTracker" element={<CovidTrackerPage user={user} handleLogout={handleLogout} continent={continent}/>} />
        <Route path="/africa" element={<AfricaPage africa={africa}/>} />
        <Route path="/asia" element={<AsiaPage asia={asia}/>} />
        <Route path="/europe" element={<EuropePage europe={europe}/>} />
        <Route path="/north%20america" element={<NorthAmericaPage northAmerica={northAmerica}/>} />
        <Route path="/australia-oceania" element={<OceaniaPage oceania={oceania}/>} />
        <Route path="/south%20america" element={<SouthAmericaPage southAmerica={southAmerica}/>} />
        <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path="/africa/:countryName" element={<Detail setCountryName={setCountryName}/>} />
        <Route path="/continent" element={<ContinentPage user={user} handleLogout={handleLogout} continent={continent} />} />
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
