import { useContext } from "react";
import { HeaderContext } from "../context/HeaderContext";

export default function Header() {
    const { toggleDarkMode } = useContext(HeaderContext);

    return(
        <div className="flex justify-between items-center dark:bg-dark-blue-elements 
            py-[20px] px-[100px] bg-white
            shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]">
            <p className="font-[900] text-black dark:text-white">Where in the world?</p>
            <div className="flex justify-center hover:cursor-pointer" onClick={toggleDarkMode}>
                <div className="bg-moon-light dark:invert
                bg-no-repeat bg-contain w-[18px] 
                h-[18px] mr-[10px] mt-[2px]" ></div>
                <div className="font-[600] dark:text-white">Dark Mode</div>
            </div>
        </div>
    );
}

