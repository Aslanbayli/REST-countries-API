import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Logic from "./hooks/Logic";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <div className="bg-[hsl(0, 0%, 85%)] dark:bg-very-darkblue-background">
        <Navbar onClick={toggleMode}/>
        <Logic/>
      </div>
    </div>
  );
}

export default App;
