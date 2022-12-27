import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Countries from "./components/Countries";
import { Route, Routes } from "react-router-dom"
import CountryCard from './components/CountryCard';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
    <div className={isDarkMode ? "dark" : "light"}>
      <div className="dark:bg-very-darkblue-background h-full min-h-screen">
        <Routes>
          <Route path="/" element={[<Navbar onClick={toggleMode}/>, <Countries />]} />
          <Route path=":countryName" element={<CountryCard />} />
        </Routes>
      </div>
    </div>
 
    </>
  );
}

export default App;
