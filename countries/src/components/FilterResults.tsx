import { Country } from "src/types";
import { Button } from "src/components/Button";

/*** CountryDisplay ***/

type CountryDisplayProps = {
  country: Country;
};

const CountryDisplay = ({ country }: CountryDisplayProps) => {
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

/*** CountryItem ***/

type CountryItemProps = {
  country: Country;
  onSelect: (country: Country) => void;
};

const CountryItem = ({ country, onSelect }: CountryItemProps) => {
  const handleSelect = () => onSelect(country);

  return (
    <li key={country.name.common}>
      {country.name.common} <Button text="Show" onClick={handleSelect} />
    </li>
  );
};

/*** FilterResults ***/

type FilterResultsProps = {
  countries: Country[];
  selectedCountry: Country | null;
  onSelectCountry: (country: Country) => void;
};

export const FilterResults = ({
  countries,
  onSelectCountry,
  selectedCountry,
}: FilterResultsProps) => {
  const countryToShow = countries.length === 1 ? countries[0] : selectedCountry;

  if (countryToShow) {
    return <CountryDisplay country={countryToShow} />;
  }

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length === 0) {
    return <p>No match found</p>;
  }

  return (
    <ul>
      {countries.map((country) => (
        <CountryItem
          onSelect={onSelectCountry}
          country={country}
          key={country.name.common}
        />
      ))}
    </ul>
  );
};
