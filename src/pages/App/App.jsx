import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import mappingService from "../../utils/mappingService";
import LandingPage from "../LandingPage/LandingPage";
import CovidTrackerPage from "../CovidTrackerPage/CovidTackerPage";
import AfricaPage from "../AfricaPage/AfricaPage";
import AsiaPage from "../AsiaPage/AsiaPage";
import EuropePage from "../EuropePage/EuropePage";
import NorthAmericaPage from "../NorthAmericaPage/NorthAmericaPage";
import OceaniaPage from "../OceaniaPage/OceaniaPage";
import SouthAmericaPage from "../SouthAmericaPage/SouthAmericaPage";


function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo
  const [continent, setContinent] = useState("")
  const [europe, setEurope] = useState("")


  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  useEffect(() => {
    const continentUrl = "https://corona.lmao.ninja/v2/continents";

    async function continentApiCall() {
      const response = await fetch(continentUrl)
      const data = await response.json()
      setContinent(data)
    }
    continentApiCall()
  }, [])
  

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
  
  console.log(europe,"<---------- country")
  

  if (user) {
    return (
      <Routes>
        <Route path="/covidTracker" element={<CovidTrackerPage user={user} handleLogout={handleLogout} continent={continent}/>} />
        <Route path="/africa" element={<AfricaPage />} />
        <Route path="/asia" element={<AsiaPage />} />
        <Route path="/europe" element={<EuropePage europe={europe}/>} />
        <Route path="/north-america" element={<NorthAmericaPage />} />
        <Route path="/australia-oceania" element={<OceaniaPage />} />
        <Route path="/south-america" element={<SouthAmericaPage />} />
        <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
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
