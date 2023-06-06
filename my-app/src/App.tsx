import React, { useState } from 'react';
import { MainRoute } from "./AppRoutes/MainRoute";
import { Header } from "./components/Header";
import { Moon, Sun } from 'react-feather';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log("hey");
  };

  return (
    <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <MainRoute toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
