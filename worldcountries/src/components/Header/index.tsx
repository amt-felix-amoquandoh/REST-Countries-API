import "./styles.css";
import { IonIcon } from "@ionic/react";
import { moonOutline, heart } from "ionicons/icons";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Where in the World</h1>
        <p>
          <IonIcon icon={moonOutline} /> <b>Dark Mode</b>
        </p>
      </div>
    </header>
  );
};
