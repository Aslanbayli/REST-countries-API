import React from "react";
import "../styles/Navbar.css";

function CountryCard() {
    return(
        <div className="navbar">
            <p className="title">Where in the world?</p>
            <div className="dark-mode">
                <div className="img"></div>
                <p>Dark Mode</p>
            </div>
        </div>
    );
}

export default CountryCard;