import React, { useState, useEffect } from "react";
import axios from "axios";

function CountryCard(props: any) {
    return (
        <div>
            <ul className="flex justify-around items-center flex-wrap p-[10px]">
                {
                    props.map((country: any) => 
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

export default CountryCard;