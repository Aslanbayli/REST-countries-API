import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";
import Grid from "./Grid";

function Logic() {
    const [input, setInput] = useState([]);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/${input}`)
            .then(res => {
                console.log(res.data);
                setInput(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <SearchBox/>
            <Dropdown/>
            <Grid/>
        </div>
    );
}

export default Logic;