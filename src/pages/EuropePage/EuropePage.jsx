import CountryPostCard from '../../components/CountryPostCard/CountryPostCard'

function EuropePage({country}) {
    return (
        <>
        
        <h1>This is europe page</h1>
        <CountryPostCard euCountry={country} />
        </>
    )
}

export default EuropePage