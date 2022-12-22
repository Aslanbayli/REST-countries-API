import React, { useState, useEffect } from "react";
import axios from "axios";

function CountryCard() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/name/un")
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
                        <li className="m-[30px]" key={country.cca2}>
                            <img src={country.flags.png} alt="" />
                            <p>{country.name.common}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default CountryCard;