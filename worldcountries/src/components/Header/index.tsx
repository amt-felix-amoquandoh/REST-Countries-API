import "./styles.css";
import { Moon } from "react-feather";
import { useForm } from "../../contexts/ThemeContext";

export const Header = () => {
  const { state, dispatch } = useForm();
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
