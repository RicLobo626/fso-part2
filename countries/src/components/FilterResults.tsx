import { Country, Weather } from "src/types";
import { Button } from "src/components/Button";

/*** CountryInfo ***/

type CountryInfoProps = {
  country: Country;
};

const CountryInfo = ({ country }: CountryInfoProps) => {
  console.log(country);
  return (
    <section>
      <h2>{country.name.common}</h2>

      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>

      <h3>Languages</h3>

      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <img src={country.flags.png} className="flag" alt={country.flags.alt} />
    </section>
  );
};

/*** CountryWeather ***/

type CountryWeatherProps = {
  weather: Weather | null;
};

const CountryWeather = ({ weather }: CountryWeatherProps) => {
  if (!weather) {
    return <div>Loading weather...</div>;
  }

  return (
    <section>
      <h3>Weather in {weather.name}</h3>
      <p>Temperature: {weather.main.temp} Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>Wind: {weather.wind.speed} m/s</p>
    </section>
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
  countryToShow: Country | null;
  weather: Weather | null;
  onSelectCountry: (country: Country) => void;
};

export const FilterResults = ({
  countries,
  onSelectCountry,
  countryToShow,
  weather,
}: FilterResultsProps) => {
  if (countryToShow) {
    return (
      <>
        <CountryInfo country={countryToShow} />
        <CountryWeather weather={weather} />
      </>
    );
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
