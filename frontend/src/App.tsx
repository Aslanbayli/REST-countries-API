import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Logic from "./hooks/Logic";

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
    <div className={isDarkMode ? "dark" : "light"}>
      <div className="dark:bg-very-darkblue-background h-[100%]">
        <Navbar onClick={toggleMode}/>
        <Logic/>
      </div>
    </div>
  );
}

export default App;
