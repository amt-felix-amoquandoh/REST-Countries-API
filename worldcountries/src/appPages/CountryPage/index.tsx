import "./styles.css"
import { useParams } from "react-router-dom";

export const CountryPage = () => {
    const {name} = useParams()
    return(
       <section className="mainCountry">
         <div className="container">
            
            </div>
       </section>
    )
}