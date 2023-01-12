import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CountriesContext } from "../context/CountriesContext";

type Country = {
    cca3: string,
    name: {common: string},
    flags: {png: any},
    population: number,
    region: number,
    capital: string
}

export default function CountryGrid() {
    const { countries } = useContext(CountriesContext);

    return (
        <div>
            <ul className="flex justify-around items-center flex-wrap p-[10px]">
                {
                    countries.map((country: Country) => {
                        return (    
                            <Link to={country.cca3.toLowerCase()} key={country.cca3}>
                                <div className="m-[40px] bg-white dark:bg-dark-blue-elements text-black dark:text-white rounded-md shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] pb-5 w-[350px] h-[400px]">
                                    <img src={country.flags.png} alt="flag" className="rounded-t-md w-[100%] h-[50%] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.2)]"/>
                                    <div className="py-7 pl-7 font-nunito font-[300]">
                                        <p className="py-2 text-lg font-[900]">{country.name.common}</p>
                                        <p><span className="font-[600]">Population: </span>{country.population || "unknown"}</p>
                                        <p><span className="font-[600]">Region: </span>{country.region || "unknown"}</p>
                                        <p><span className="font-[600]">Capital: </span>{country.capital ? country.capital[0] : "unknown" }</p> 
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }
            </ul>
        </div>
    );
}
