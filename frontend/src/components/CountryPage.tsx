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
        console.log(cca3);
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
            res = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${res.data[0].borders.join(",")}`)
            country.borders = res.data.map((country: any) => country.name.common);
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
            <div>
                <Link className="" to="/">Back</Link>
                <img src={country.flag} alt="flag" />
                <p>{country.name}</p>
                <div>
                    <p><span>Native Name: </span>{country.nativeName}</p>
                    <p><span>Population: </span>{country.population}</p>
                    <p><span>Sub Region: </span>{country.subRegion}</p>
                    <p><span>Capital: </span>{country.capital}</p>
                    <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
                    <p><span>Currencies: </span>{country.currencies}</p>
                    <p><span>Languages: </span>{country.languages}</p>
                </div>
                <p>Border Countries: </p>
                <div>
                    {country.borders.map((border) => <div key={border}>{border}</div>)}
                </div>
            </div>
        </Layout>
    );
}
