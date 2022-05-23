import { useEffect } from 'react';
import Header from '../../components/Header/Header'



export default function covidTrackerPage({user, handleLogout, continent}) {

    

    return (
        <>
        <Header user={user} handleLogout={handleLogout}/>
        
        </>
    )
}