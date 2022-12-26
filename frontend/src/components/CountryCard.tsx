import React from "react";

function CountryCard({country}: any) {
    return (
        <li className="m-[40px] bg-white text-black" key={country.cca2}>
            <img src={country.flags.png} alt="flag" />
            <p>{country.name.common}</p>
        </li>
    );
}

export default CountryCard;