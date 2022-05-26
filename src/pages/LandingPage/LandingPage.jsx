import Header from "../../components/Header/Header"



export default function LandingPage({ user }) {
    return (
        <>
        <Header user={user}/>
        <h1>this is landing page</h1>
        </>
    )
}