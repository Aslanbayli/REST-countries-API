import React from "react";

function CountryCard({country}: any) {
    return (
        <li key={country.cca2}>
            <div className="m-[40px] bg-white text-black rounded-md shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] pb-5 ">
                <img src={country.flags.png} alt="flag" className="rounded-t-md w-[100%] h-[100%] object-cover"/>
                <div className="py-7 pl-7 font-nunito font-[300]">
                    <p className="py-2 text-lg font-[900]">{country.name.common}</p>
                    <p><span className="font-[600]">Population: </span>{country.population || "unknown"}</p>
                    <p><span className="font-[600]">Region: </span>{country.region || "unknown"}</p>
                    <p><span className="font-[600]">Capital: </span>{country.hasOwnProperty("capital") ? country.capital[0] : "unknown" }</p> 
                </div>
            </div>
        </li>
    );
}

export default CountryCard;