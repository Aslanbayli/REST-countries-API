import React from "react";
import CountryCard from "./CountryCard";

function Grid({countries}: any) {
    return (
        <div>
            <ul className="flex justify-around items-center flex-wrap p-[10px]">
                {
                    countries.map((country: any) => {
                        return (    
                          <CountryCard country={country}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Grid;