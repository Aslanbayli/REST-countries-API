import React from "react";
import CountryCard from "./CountryCard";

function Grid(props: any) {
    return (
        <div>
        <ul className="flex justify-around items-center flex-wrap p-[10px]">
            {
                props.map((country: any) => 
                    <CountryCard/>
                )
            }
        </ul>
    </div>
    );
}

export default Grid;