import { Button } from ".";

/*** CountryItem ***/

const CountryItem = ({ country, onSelect }) => {
  const handleSelect = () => onSelect(country);

  return (
    <li key={country.name.common}>
      {country.name.common} <Button text="Show" onClick={handleSelect} />
    </li>
  );
};

/*** FilterResults ***/

export const FilterResults = ({ countries, onSelectCountry }) => {
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
