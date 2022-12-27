import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Logic from "./hooks/Logic";
import { Route, Routes, Link } from "react-router-dom"
import CountryCard from './components/CountryCard';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!isDarkMode);

    // Toggle background color of the body element
    if (document.body.classList.contains("bg-very-darkblue-background")) {
      document.body.classList.remove("bg-very-darkblue-background");
    } else {
      document.body.classList.add("bg-very-darkblue-background");
    }
  };

  return (
    <>
    <div className={isDarkMode ? "dark" : "light"}>
      <div className="dark:bg-very-darkblue-background h-[100%]">
        <Routes>
          <Route path="/" element={[<Navbar onClick={toggleMode}/>, <Logic />]} />
          <Route path=":countryName" element={<CountryCard />} />
        </Routes>
      </div>
    </div>
 
    </>
  );
}

export default App;
