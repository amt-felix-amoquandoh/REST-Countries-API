import React from 'react';
import { Moon } from 'react-feather';

type HeaderProps = {
  toggleTheme: () => void;
};

export const Header = ({ toggleTheme }: HeaderProps) => {
  return (
    <header className="header">
      <div className="container">
        <h1>Where in the world</h1>
        <p onClick={toggleTheme}>
          <Moon /> <b>Dark Mode</b>
        </p>
      </div>
    </header>
  );
};
