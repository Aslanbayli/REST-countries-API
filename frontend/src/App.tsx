import React from 'react';
import Navbar from "./components/Navbar";
import SearchBox from './components/SearchBox';
import Dropdown from "./components/Dropdown";
import Grid from "./components/Grid";
import Logic from "./hooks/Logic";

function App() {
  return (
    <div className="bg-dark-blue-elements">
      <Navbar />
      <Logic/>
    </div>
  );
}

export default App;
