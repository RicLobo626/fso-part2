import { Country } from "src/types";
import { Button } from "src/components/Button";

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
  onSelectCountry: (country: Country) => void;
};

export const FilterResults = ({
  countries,
  onSelectCountry,
}: FilterResultsProps) => {
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
