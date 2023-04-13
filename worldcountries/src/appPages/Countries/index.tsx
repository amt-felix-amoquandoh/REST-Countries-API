import "./styles.css"
import { SearchInput } from "../../components/searchInput";
import { api } from "../../api";
import { useState } from "react";
import { useEffect } from 'react'



export const Countries = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getAllCountries()
  },[])

  const getAllCountries = async ()=> {
     setLoading(false)
     let countries = await api.getCountries()
     setCountries(countries)
     setLoading(true)
  }

    return (
        <section className="countriesArea">
          <SearchInput/>  
          <div className="countries">
            {loading && <div className="">Loading...</div>}
            {/* {!loading && countries.map((item, index) =>{

            })} */}
          </div>
        </section>
    )
}