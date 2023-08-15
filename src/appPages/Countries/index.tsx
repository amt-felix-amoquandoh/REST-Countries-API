import "./styles.css";
import { useState, useEffect, useCallback } from "react";
import { SearchInput } from "../../components/searchInput";
import { CountriesTS } from "../../types/Countries";
import { CountryItem } from "../../components/CountryItems";
import { api } from "../../api";

export const Countries = () => {
  const [countries, setCountries] = useState<CountriesTS[]>([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    setLoading(true);
    let countries = await api.getCountries();
    setCountries(countries);
    setLoading(false);
  };

  const handleSearchChange = useCallback((search:string) => {
    setSearch(search);
  }, []);

  const handleFilterChange = useCallback((region:string) => {
    setRegion(region);
  }, []);

  let filteredCountries = countries;
  if (region) {
    filteredCountries = filteredCountries.filter(
      (country) => country.region.toLowerCase() === region.toLowerCase()
    );
  }
  if (search) {
    filteredCountries = filteredCountries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <section className="countriesArea">
      <SearchInput
        value={search}
        setSearch={handleSearchChange}
        handleFilter={handleFilterChange}
      />
      <div className="countries">
        {loading && <div className="">Loading...</div>}
        {!loading &&
          filteredCountries.map((item) => (
            <CountryItem
              name={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
              flag={item.flags.png}
            />
          ))}
      </div>
    </section>
  );
};