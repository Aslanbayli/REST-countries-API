import { useState, useRef, useEffect } from "react";
import axios from "axios";

import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";
import CountryGrid from "./CountryGrid";
import Layout from "./Layout";
import { CountriesContext } from "../context/CountriesContext";
import LoadingScreen from "./LoadingScreen";

export default function Countries() {
    const [countryName, setCountryName] = useState("");
    const [region, setRegion] = useState("Filter By Region");
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllCountries();
    }, []);

    const fetchCountriesByName = (name: string) => {
        let url = "https://restcountries.com/v3.1/all";
        if (name !== "") {
            url = `https://restcountries.com/v3.1/name/${name}`;
        }
        axios.get(url)
            .then(res => {
                console.log(url);
                return setCountries(res.data);
            })
            .then(() => setIsLoading(false))
            .catch(err => {
                console.log(err);
            });
        setIsLoading(false);
    }


    const fetchCountriesByRegion = (region: string) => {
        let url = "https://restcountries.com/v3.1/all";
        if (region !== "" && region !== "All Regions") {
            url = `https://restcountries.com/v3.1/region/${region}`;
        }
        axios.get(url)
            .then(res => {
                console.log(url);
                return setCountries(res.data);
            })
            .then(() => setIsLoading(false))
            .catch(err => {
                console.log(err);
            });
        
    }

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleSearchBoxChange = (v: string) => {
        setCountryName(v);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => fetchCountriesByName(v), 400);        
    }

    const getAllCountries = () => {
        axios.get("https://restcountries.com/v3.1/all")
        .then(res => {
            return setCountries(res.data);
        })
        .then(() => setIsLoading(false))
        .catch(err => {
            console.log(err);
        });
    }

    const handleDropdownChange = (v: string) => {
        setRegion(v);
        fetchCountriesByRegion(v);
    }

    return (
        <Layout>
            {isLoading ? <LoadingScreen /> : 
                <div>
                    <div className="flex justify-between py-[40px] px-[80px]" onLoadStart={getAllCountries}>
                        <SearchBox value={countryName} onChange={handleSearchBoxChange}/>
                        <Dropdown value={region} onChange={handleDropdownChange}/>
                    </div>
                    <CountriesContext.Provider value={{countries}}>
                        <CountryGrid />
                    </CountriesContext.Provider>
                </div>
            }
        </Layout>
    );
}