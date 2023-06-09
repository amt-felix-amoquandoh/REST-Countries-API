import React from "react";
import { Moon, Sun } from "react-feather";
import "./styles.css";

type HeaderProps = {
  toggleTheme: () => void;
  theme: string;
};

export const Header = ({ toggleTheme, theme }: HeaderProps) => {
  const isDarkMode = theme === "dark";
  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";
  const icon = isDarkMode ? <Sun /> : <Moon />;

  return (
    <header className="header">
      <div className="container">
        <h1>Where in the world</h1>
        <p onClick={toggleTheme}>
          {icon} <b>{buttonText}</b>
        </p>
      </div>
    </header>
  );
};
