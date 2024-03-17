import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountries,handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country

    const [visited, setVisited] = useState(false)
    const HandleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`Country ${visited && 'visited'}`}>
            <h3>name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>population:{population}</p>
            <p>Area:{area}</p>
            <p>Code:{cca3}</p>
            <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>add flags</button>
            <button onClick={HandleVisited}>{visited ? 'visited' : 'Going'}</button>
            { visited ? 'I have visited this country' : 'I want to visit' }
        </div >
    );
};

export default Country;