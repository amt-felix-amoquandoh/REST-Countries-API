<<<<<<< Updated upstream
import { useEffect, useState } from "react";
import "./styles.css"
import { Link, useParams } from "react-router-dom";
import { CountryTS } from "../../types/Country";
import { SingleCountry } from "../../components/SingleCountry";
import { api } from "../../api";

export const CountryPage = () => {
    const {name} = useParams()

    const [loading,setLoading] = useState(false);
    const [country, setCountry] = useState<CountryTS[]>([])

    useEffect(()=>{
      if(name){
         getCountry(name)
      }
    },[name]);

    const getCountry =async (params:string) => {
      setLoading(true)
      let country = await api.getCountry(params)
      setCountry(country)
      setLoading(false)
    }

    return(
       <section className="mainCountry">
         <div className="countryContainer">
            <Link to="/" className="backButton">Back</Link>
            {loading && <div className="loading">Loading</div>}
            {!loading && country.map((item) => (
               <SingleCountry
               flag={item.flags.png}
               name={item.name}
               nativeName={item.nativeName}
               population={item.population}
               region={item.region}
               subregion={item.subRegion}
               capital={item.capital}
               topLevelDomain={item.topLevelDomain[0]}
               currencie={item.currencie && item.currencie}
               languages={item.languages}
               borders={item.borders}
               />
            ))}
         </div>
       </section>
    )
}
=======
import "./styles.css";
import { useParams } from "react-router-dom";

export const CountryPage = () => {
  const { name } = useParams();
  return (
    <section className="mainCountry">
      <div className="mainCountryContainer"></div>
    </section>
  );
};
>>>>>>> Stashed changes
