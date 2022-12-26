import React, { useState, useEffect } from "react";
import axios from "axios";

function CountryCard(props: any) {
    return (
        <li className="m-[40px] bg-white" key={props.cca2}>
            <img src={props.flags.png} alt="flag" />
            <p>{props.name.common}</p>
        </li>
    );
}

export default CountryCard;