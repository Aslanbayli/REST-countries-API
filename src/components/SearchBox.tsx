import React from "react";

type SearchBoxProps = {
    value: string,
    onChange: (v: string) => void
}

export default function SearchBox({value, onChange}: SearchBoxProps) {
    return (
        <div className="relative">
            <div className="bg-search 
                bg-no-repeat bg-contain w-4 
                h-4 absolute ml-6 mt-5 opacity-60 dark:invert">
            </div>
            <button className="bg-x-mark dark:invert bg-no-repeat bg-contain w-4 h-4 absolute ml-[90%] mt-[5%] opacity-60" 
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    return onChange(e.currentTarget.value);
                }}>
            </button>
            <input value={value} onChange={(e: React.FormEvent<HTMLInputElement>) => {
                return onChange(e.currentTarget.value);
            }}
                className="w-[350px] rounded p-3 pl-14 py-4 text-sm focus:outline-none 
                dark:bg-dark-blue-elements dark:text-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]" 
                type="text" placeholder="Search for a country...">
            </input>
        </div>
    );
}
