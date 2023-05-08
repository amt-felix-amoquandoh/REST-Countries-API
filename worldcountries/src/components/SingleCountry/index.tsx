import "./styles.css";
import { SingleCountryTS } from "../../types/SingleCountry";

export const SingleCountry = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
  flag,
}: SingleCountryTS) => {
  return (
    <div>
      <img src={flag} alt={`Flag Name: ${name}`} />
      <div className="countryData">
        <h1>{name}</h1>
        <div className="dataBox1">
          <p>
            <span>Native Name:</span>
            {nativeName}
          </p>
          <p>
            <span>Population:</span>
            {population}
          </p>
          <p>
            <span>Region:</span>
            {region}
          </p>
          <p>
            <span>Subregion:</span>
            {subregion}
          </p>
          {capital && (
            <p>
              <span>Capital: </span>
              {capital}
            </p>
          )}
          <p className="topLevel">
            <span>Top Level Domain</span>
            {topLevelDomain}
          </p>
          {currencies && (
            <p>
              <span>Currencies: </span>
              {currencies.map((currency, index) => (
                <span key={index}>{currency.name}</span>
              ))}
            </p>
          )}
          <p>
            <span>Languages: </span>
            {languages.map((language, index) => (
              <span key={index}>{language.name}</span>
            ))}
          </p>
        </div>
      </div>
      {borders && (
        <div className="borderArea">
          <p>Border Countries: </p>
          <div className="borders">
            {/* {borders.map((item, index) => <Link to={`/code/${item}` key={index}></Link>)} */}
          </div>
        </div>
      )}
    </div>
  );
};
