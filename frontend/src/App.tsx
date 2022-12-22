import React from 'react';
import Navbar from "./components/Navbar";
import CountryCard from "./components/CountryCard";
import Dropdown from "./components/Dropdown";
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="bg-dark-blue-elements">
      <Navbar />
      <div className="flex justify-between py-[30px] px-[100px]">
        <SearchBox />
        <Dropdown />
      </div>
      <CountryCard />
    </div>
  );
}

export default App;
