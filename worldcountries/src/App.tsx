import React from "react";
import { MainRoute } from "./AppRoutes/MainRoute";
import { Header } from "./components/Header";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark"); // Added default value "dark"

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <section data-theme={theme}>
      <Header />
      <MainRoute />
    </section>
  );
}

export default App;
