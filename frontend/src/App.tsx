import React from 'react';
import Navbar from "./components/Navbar";
import SearchBox from './components/SearchBox';
import Dropdown from "./components/Dropdown";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="bg-dark-blue-elements">
      <Navbar />
      <div className="flex justify-between py-[40px] px-[80px]">
          <SearchBox />
          <Dropdown />
      </div>
      <Grid />
    </div>
  );
}

export default App;
