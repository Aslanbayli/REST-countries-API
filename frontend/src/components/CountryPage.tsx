import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import Layout from "./Layout";

type Country = {
    flag: any,
    name: string,
    nativeName: string,
    population: number,
    subRegion: string,
    capital: string,
    topLevelDomain: string
    languages: string[],
    currencies: string[],
    borders: string[]
}

export default function CountryPage() {
    const { cca3 } = useParams();
    const [country, setCountry] = useState<Country | null>(null);

    useEffect(() => {
        fetchCountryByCCA3(cca3);
    }, [cca3]);

    const fetchCountryByCCA3 = async (cca3: string | undefined) => {
        try {
            let res = await axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`);
            const country: Country = {
                flag: res.data[0].flags.png,
                name: res.data[0].name.common,
                nativeName: Object.values<any>(res.data[0].name.nativeName)[0].common,
                population: res.data[0].population,
                subRegion: res.data[0].subregion,
                capital: res.data[0].capital,
                topLevelDomain: res.data[0].tld,
                languages: Object.values(res.data[0].languages),
                currencies: Object.values(res.data[0].currencies).map((currency: any) => currency.name),
                borders: []
            }
            if (res.data[0].borders) {
                res = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${res.data[0].borders.join(",")}`);
                country.borders = res.data.map((country: any) => country.name.common);
            } else {
                country.borders = ["None"];
            }
            setCountry(country);
        } catch(e) {
            console.error(e)
        }
    }
    
    if (!country) {
        return null;
    }

    return (
        <Layout>
            <div className="dark:text-white p-14 h-full">
                <div className="table shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] bg-white dark:bg-dark-blue-elements mb-10 h-10 w-[9%] rounded-md text-center">
                    <Link className="flex items-center justify-center h-full pr-4" to="/">
                        <div className="bg-back-arrow dark:invert bg-no-repeat bg-contain w-5 h-5 mx-3"></div>
                        <p className="text-sm">Back</p>
                    </Link>
                </div>
                <div>
                    <img src={country.flag} alt="flag" className="inline"/>
                    <p className="font-bold">{country.name}</p>
                    <div>
                        <p><span>Native Name: </span>{country.nativeName}</p>
                        <p><span>Population: </span>{country.population}</p>
                        <p><span>Sub Region: </span>{country.subRegion}</p>
                        <p><span>Capital: </span>{country.capital}</p>
                        <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
                        <p><span>Currencies: </span>{country.currencies.join(", ")}</p>
                        <p><span>Languages: </span>{country.languages.join(", ")}</p>
                    </div>
                    <p>Border Countries: </p>
                    <div className="flex justify-start items-center">
                        {country.borders.map((border) => <div className="m-3" key={border}>{border}</div>)}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
