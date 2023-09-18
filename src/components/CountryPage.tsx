import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import Layout from "./Layout";

type Country = {
    flag: any,
    name: string,
    nativeName: string,
    population: string,
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
                nativeName: (res.data[0].name.nativeName) ? Object.values<any>(res.data[0].name.nativeName)[0].common : "unknown",
                population: res.data[0].population ? res.data[0].population : "unknown",
                subRegion: res.data[0].subregion ? res.data[0].subregion : "unknown",
                capital: res.data[0].capital ? res.data[0].capital : "unknown",
                topLevelDomain: res.data[0].tld ? res.data[0].tld : "unknown",
                languages: res.data[0].languages ? Object.values(res.data[0].languages) : ["unknown"],
                currencies: res.data[0].currencies ? Object.values(res.data[0].currencies).map((currency: any) => currency.name) : ["unknown"],
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
                <div className="table shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] bg-white dark:bg-dark-blue-elements mb-20 h-10 w-[9%] rounded-md text-center">
                    <Link className="flex items-center justify-center h-full pr-4 mt-2" to="/">
                        <div className="bg-back-arrow dark:invert bg-no-repeat bg-contain w-5 h-5 mx-3"></div>
                        <p className="text-sm">Back</p>
                    </Link>
                </div>
                <div className="flex w-full">
                    <img src={country.flag} alt="flag" className="inline w-[500px]"/>
                    <div className="ml-[10%] mt-7">
                        <p className="font-bold text-3xl mb-7">{country.name}</p>
                        <div className="flex">
                            <div className="w-full">
                                <p className="my-3"><span className="font-semibold">Native Name: </span>{country.nativeName}</p>
                                <p className="my-3"><span className="font-semibold">Population: </span>{country.population}</p>
                                <p className="my-3"><span className="font-semibold">Sub Region: </span>{country.subRegion}</p>
                                <p className="my-3"><span className="font-semibold">Capital: </span>{country.capital}</p>
                            </div>

                            <div className="w-full">
                                <p className="my-3"><span className="font-semibold">Top Level Domain: </span>{country.topLevelDomain}</p>
                                <p className="my-3"><span className="font-semibold">Currencies: </span>{country.currencies.join(", ")}</p>
                                <p className="my-3"><span className="font-semibold">Languages: </span>{country.languages.join(", ")}</p>
                            </div>
                        </div>
                        <div className="flex mt-10 items-center">
                            <p className="font-semibold mr-3">Border Countries: </p>
                            <div className="flex justify-start items-center">
                                {country.borders.map((border) => <div className="m-3 px-4 py-1 rounded-sm shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)]" key={border}>{border}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
