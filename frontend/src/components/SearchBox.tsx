import React, {useState} from "react";

function SearchBox() {
    const [input, setInput] = useState("united");

    return (
        <div>
            <input value={input} onInput={(e: any) => setInput(e.target.value)} 
                className="w-[350px] rounded-md p-[10px] pl-[20px]  shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]" 
                type="text" placeholder="Search for a country...">
            </input>
        </div>
    );
}

export default SearchBox;