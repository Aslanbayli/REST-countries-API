import React from "react";

function SearchBox({value, onChange}: any) {
    if (typeof value == "object") {
      value = value.name;
    } 
    
    return (
        <div>
            <input value={value} onInput={(e: any) => onChange(e.target.value)}
                className="w-[350px] rounded-md p-[10px] pl-[20px]  shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]" 
                type="text" placeholder="Search for a country...">
            </input>
        </div>
    );
}

export default SearchBox;