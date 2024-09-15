import { Country } from "src/types";

/*** CountryDisplay ***/
type CountryDisplayProps = {
  country: Country;
};

export const CountryDisplay = ({ country }: CountryDisplayProps) => {
  return (
    <div>
      <h2>{country.name.common}</h2>

      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>

      <h3>Languages</h3>

      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <img src={country.flags.png} className="flag" />
    </div>
  );
};

/*** FilterResults ***/
type FilterResultsProps = {
  countries: Country[];
};

export const FilterResults = ({ countries }: FilterResultsProps) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length === 0) {
    return <p>No match found</p>;
  }

  if (countries.length === 1) {
    return <CountryDisplay country={countries[0]} />;
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name.common}>{country.name.common}</li>
      ))}
    </ul>
  );
};
