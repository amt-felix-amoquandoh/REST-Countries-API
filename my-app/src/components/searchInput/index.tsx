import "./styles.css";
import { InputTS } from "../../types/Input";
import { useState } from "react";
import { useDebounce } from "./Debounce";
import { Search } from 'react-feather';

const delay = 500;

export const SearchInput = ({ value, setSearch }: InputTS) => {
  const [input, setInput] = useState("");
  const debouncedChange = useDebounce(setSearch, delay);
  const handleChange = (e: string) => {
    setInput(e);
    debouncedChange(e);
  };

  return (
    <section className="inputArea">
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search by Country"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <Search className="searchIcon" size={20} />
      </div>
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="Filter by Region" disabled selected>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};
