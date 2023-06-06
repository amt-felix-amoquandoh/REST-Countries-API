import React from 'react';
import { Moon, Sun } from 'react-feather';

type HeaderProps = {
  toggleTheme: () => void;
  theme: string;
};

export const Header = ({ toggleTheme, theme }: HeaderProps) => {
  return (
    <header className="header">
      <div className="container">
        <h1>Where in the world</h1>
        <p onClick={toggleTheme}>
          {theme === 'light' ? <Moon /> : <Sun />} <b>Dark Mode</b>
        </p>
      </div>
    </header>
  );
};
