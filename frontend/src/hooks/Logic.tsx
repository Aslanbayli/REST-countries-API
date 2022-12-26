import { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "../components/SearchBox";
import Dropdown from "../components/Dropdown";
import Grid from "../components/Grid";

function Logic() {
    const [countryName, setCountryName] = useState("");
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getData = setTimeout(() => {
            makeAPICall(countryName);
        }, 300);

        return () => clearTimeout(getData);
    }, [countryName]);

    const checkValue: any = (value: any) => {      
        if (typeof value == "object") {
            if (value.name === "") {
                return "https://restcountries.com/v3.1/all";
            }
            return `https://restcountries.com/v3.1/region/${value.name}`;
        } else if (typeof value == "string") {
            if (value === "") {
                return "https://restcountries.com/v3.1/all";
            }
            return `https://restcountries.com/v3.1/name/${value}`;

        }
        return "https://restcountries.com/v3.1/all";
    };

    const makeAPICall = (countryName: any) => {
        let url: string = checkValue(countryName);

        axios.get(url)
            .then(res => {
                setCountries(res.data);
                console.log(url);
                // console.log(res.data);
                console.log(countries);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className="flex justify-between py-[40px] px-[80px]">
                <SearchBox value={countryName} onChange={(v: string) => {setCountryName(v)}}/>
                <Dropdown value={countryName} onChange={(v: string) => {setCountryName(v)}}/>
            </div>
            <Grid countries={countries}/>
        </div>
    );
}

export default Logic;