import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = country => {
        console.log('add this to country')
        console.log(country)
        const newCountries = [...visitedCountries, country];
        setVisitedCountries(newCountries)
    }

    const handleVisitedFlags = flag => {
        console.log('adding flag')
        const newFlag = [...visitedFlags, flag]
        setVisitedFlags(newFlag);
    }


    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            {/* display visited country name */}
            <div>
                <h3>Visited Countries:{visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* display visited country flags */}
            <div className="flagContainer">
                {
                    visitedFlags.map(flag => <img src={flag} key={flag.cca3}></img>)
                }
            </div>
            {/* display all countries */}
            <div className="countries">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;