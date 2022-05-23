import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import LandingPage from "../LandingPage/LandingPage";
import CovidTrackerPage from "../CovidTrackerPage/CovidTackerPage";

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo
  const [continent, setContinent] = useState({
    continent: ""
  })
  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  useEffect(() => {
    const url = "https://corona.lmao.ninja/v2/continents";

    async function makeApiCall() {
      const response = await fetch(url)
      const data = await response.json()
      setContinent(data)
    }
    makeApiCall()
  }, [])


  if (user) {
    return (
      <Routes>
        <Route path="/covidTracker" element={<CovidTrackerPage user={user} handleLogout={handleLogout} continent={continent}/>} />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
