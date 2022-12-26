import React from "react";

function Navbar({onClick}: any) {
    return(
        <div className="flex justify-between items-center dark:bg-dark-blue-elements 
            py-[20px] px-[100px] bg-white
            shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]">
            <p className="font-nunito font-[900] text-black dark:text-white" >Where in the world?</p>
            <div className="flex justify-center">
                <a className="bg-moon-light dark:invert
                bg-no-repeat bg-contain w-[18px] 
                h-[18px] mr-[10px] mt-[2px] hover:cursor-pointer" onClick={(e: any) => onClick(e)}></a>
                <a className="font-nunito font-[600] hover:cursor-pointer dark:text-white" onClick={(e: any) => onClick(e)}>Dark Mode</a>
            </div>
        </div>
    );
}

export default Navbar;