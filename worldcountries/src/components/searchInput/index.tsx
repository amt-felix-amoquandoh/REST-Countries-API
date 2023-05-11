import "./styles.css";
import { InputTS } from "../../types/Input";
// import { Search } from 'react-feather';

export const SearchInput = ({ value, setSearch }: InputTS) => {
  return (
    <section className="inputArea">
      <input
        type="text"
        placeholder="Search by Country"
        value={value}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setSearch(e.target.value)}>
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
