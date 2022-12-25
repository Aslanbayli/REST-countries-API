import React, { useState, useEffect } from "react";
import axios from "axios";

function CountryCards(props: any) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/all`)
            .then(res => {
                console.log(res.data);
                setCountries(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <ul className="flex justify-around items-center flex-wrap p-[10px]">
                {
                    countries.map((country: any) => 
                        <li className="m-[40px] bg-white" key={country.cca2}>
                            <img src={country.flags.png} alt="flag" />
                            <p>{country.name.common}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default CountryCards;