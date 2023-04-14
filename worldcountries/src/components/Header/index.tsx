import "./styles.css"
import { Camera } from 'react-feather';

export const Header = () => {
    return (
        <header className="header">
           <div className="container">
           <h1>Where in the World</h1>
           <p><Camera />Dark Mode</p>
           </div>
        </header>    
    )
}