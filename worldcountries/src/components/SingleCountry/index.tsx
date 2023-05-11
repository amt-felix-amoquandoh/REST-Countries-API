import "./styles.css";
import { SingleCountryTS } from "../../types/SingleCountry";
import { Link } from "react-router-dom";

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
    <div className="mainData">
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
              <span key={index} className="language">
                {language.name}
              </span>
            ))}
          </p>
        </div>
        {borders && (
          <div className="borderBox">
            <p>Border Countries: </p>
            <div className="borders">
              {borders.map((item, index) => (
                <Link to={`/code/${item}`} key={index}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
