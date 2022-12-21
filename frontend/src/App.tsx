import React from 'react';
import Navbar from "./components/Navbar";
import CountryCard from "./components/CountryCard";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountryCard />
      <Dropdown />
    </div>
  );
}

export default App;
