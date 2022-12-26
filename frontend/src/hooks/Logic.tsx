import { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "../components/SearchBox";
import Dropdown from "../components/Dropdown";
import Grid from "../components/Grid";

function Logic() {
    // State and setter 
    const [countryName, setCountryName] = useState("");

    useEffect(() => {
        const getData = setTimeout(() => {
            makeAPICall(countryName);
        }, 1000);

        return () => clearTimeout(getData);
    }, [countryName]);

    const checkValue = (v: string) => {
        if (v === "") {
            return "https://restcountries.com/v3.1/all";
        } else {
            return `https://restcountries.com/v3.1/name/${v}`;

        }
    }

    const makeAPICall = (countryName: string) => {
        let input = checkValue(countryName);

        axios.get(input)
            .then(res => {
                console.log(res.data);
                console.log(input);
            })
            .catch(err => {
                console.log(err);
            });
  
    }

    return (
        <div className="flex justify-between py-[40px] px-[80px]">
            <SearchBox value={countryName} onChange={(v: string) => {setCountryName(v)}}/>
            <Dropdown />
        </div>
    );
}

export default Logic;