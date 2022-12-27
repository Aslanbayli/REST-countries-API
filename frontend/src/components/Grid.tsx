import React from "react";
import { useNavigate} from 'react-router-dom';

function Grid({countries}: any) {
    const navigate = useNavigate();

    return (
        <div>
            <ul className="flex justify-around items-center flex-wrap p-[10px]">
                {
                    countries.map((country: any) => {
                        return (    
                            <li key={country.cca3} onClick={() => navigate(country.name.common, {state: country})}>
                                <div className="m-[40px] bg-white dark:bg-dark-blue-elements text-black dark:text-white rounded-md shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] pb-5 ">
                                    <img src={country.flags.png} alt="flag" className="rounded-t-md w-[100%] h-[100%] object-cover"/>
                                    <div className="py-7 pl-7 font-nunito font-[300]">
                                        <p className="py-2 text-lg font-[900]">{country.name.common}</p>
                                        <p><span className="font-[600]">Population: </span>{country.population || "unknown"}</p>
                                        <p><span className="font-[600]">Region: </span>{country.region || "unknown"}</p>
                                        <p><span className="font-[600]">Capital: </span>{country.hasOwnProperty("capital") ? country.capital[0] : "unknown" }</p> 
                                    </div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Grid;