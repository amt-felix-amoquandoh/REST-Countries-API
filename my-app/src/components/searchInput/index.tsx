import "./styles.css";
import { InputTS } from "../../types/Input";
import { useState } from "react";
import { useDebounce } from "./Debounce";
import { Search } from "react-feather";

const delay = 500;

export const SearchInput = ({ value, setSearch }: InputTS) => {
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const debouncedChange = useDebounce(setSearch, delay);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setSearchInput(selectedValue);
    debouncedChange(selectedValue);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setFilterInput(selectedValue);
    setSearch(selectedValue);
  };

  return (
    <section className="inputArea">
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search by Country"
          value={searchInput}
          onChange={handleSearchChange}
        />
        <Search className="searchIcon" size={20} />
      </div>
      <select
        className="selectDropdown"
        value={filterInput}
        onChange={handleFilterChange}
      >
        <option className="optiontry" value="" disabled>
          Filter by Region
        </option>
        <option className="me" value="Africa">
          Africa
        </option>
        <option value="America">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};
