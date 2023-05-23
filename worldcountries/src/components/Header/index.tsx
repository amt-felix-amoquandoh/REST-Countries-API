import "./styles.css";
import { Moon } from "react-feather";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Where in the World</h1>
        <p>
          <Moon /> <b>Dark Mode</b>
        </p>
      </div>
    </header>
  );
};
