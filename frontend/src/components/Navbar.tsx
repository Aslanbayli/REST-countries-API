import React from "react";

function CountryCard() {
    return(
        <div className="flex justify-between items-center 
            py-[20px] px-[100px] bg-white
            shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]">

            <p className="font-nunito font-[900] text-black" >Where in the world?</p>
            <div className="flex justify-center">
                <div className="bg-moon-light 
                bg-no-repeat bg-contain w-[18px] 
                h-[18px] mr-[10px] mt-[2px]"></div>
                <p className="font-nunito font-[600]">Dark Mode</p>
            </div>
        </div>
    );
}

export default CountryCard;