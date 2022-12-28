import { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import CountryPage from './components/CountryPage';
import Countries from './components/Countries';
import { HeaderContext } from './context/HeaderContext';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
    <div className={isDarkMode ? "dark" : "light bg-body-background"}>
      <div className="dark:bg-very-darkblue-background h-full min-h-screen">
        <HeaderContext.Provider value={{ toggleDarkMode }}>
          <Routes>
              <Route path="/" element={<Countries />} />
            <Route path=":countryName" element={<CountryPage />} />
          </Routes>
        </HeaderContext.Provider>
      </div>
    </div>
    </>
  );
}

export default App;
