import React from "react";
import { useLocation} from "react-router-dom";

function CountryCard() {
    const country = useLocation();
    console.log(country.state)
    const nativeNameKey = Object.values(country.state.name.nativeName)[0];

    return (
        <div>
            <button>Back</button>
            <img src={country.state.flags.png} alt="flag" />
            <p>{country.state.name.common}</p>
            <div>
                {/* <p><span>Native Name: </span>{country.state.name.nativeName.swe.common}</p> */}
            </div>
        </div>
    );
}

export default CountryCard;