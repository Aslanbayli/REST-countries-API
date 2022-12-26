import React from "react";

function SearchBox({value, onChange}: any) {
    if (typeof value == "object") {
      value = value.name;
    } 
    
    return (
        <div>
            <div className="bg-search 
                bg-no-repeat bg-contain w-4 
                h-4 absolute ml-6 mt-5 opacity-60 dark:invert">
            </div>
            <input value={value} onInput={(e: any) => onChange(e.target.value)}
                className="w-[350px] rounded p-3 pl-14 py-4 text-sm dark:bg-dark-blue-elements dark:text-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]" 
                type="text" placeholder="Search for a country...">
            </input>
        </div>
    );
}

export default SearchBox;