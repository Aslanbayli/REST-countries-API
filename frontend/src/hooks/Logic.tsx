import { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "../components/SearchBox";
import Dropdown from "../components/Dropdown";
import Grid from "../components/Grid";

function Logic() {
    const [countryName, setCountryName] = useState("");

    useEffect(() => {
        const getData = setTimeout(() => {
            makeAPICall(countryName);
        }, 1000);

        return () => clearTimeout(getData);
    }, [countryName]);

    const checkValue = (value: any) => {      
        if (typeof value == "object") {
            if (value.name === "") {
                return "https://restcountries.com/v3.1/all";
            }
            return `https://restcountries.com/v3.1/region/${value.name}`;
        } else {
            if (value === "") {
                return "https://restcountries.com/v3.1/all";
            }
            return `https://restcountries.com/v3.1/name/${value}`;

        }
    }

    const makeAPICall = (countryName: any) => {
        let url = checkValue(countryName);

        axios.get(url)
            .then(res => {
                console.log(res.data);
                console.log(url);
            })
            .catch(err => {
                console.log(err);
            });
  
    }

    return (
        <div className="flex justify-between py-[40px] px-[80px]">
            <SearchBox value={countryName} onChange={(v: string) => {setCountryName(v)}}/>
            <Dropdown value={countryName} onChange={(v: string) => {setCountryName(v)}}/>
        </div>
    );
}

export default Logic;