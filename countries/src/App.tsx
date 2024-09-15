import { useEffect, useState } from "react";
import { FilterResults, Filter, CountryWeather, CountryInfo } from "src/components";
import { getCountries } from "src/services/countries";
import { getWeather } from "src/services/weather";
import { Country, Weather } from "src/types";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filter, setFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase());
  });

  const countryToShow =
    filteredCountries.length === 1 ? filteredCountries[0] : selectedCountry;

  useEffect(() => {
    (async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (e) {
        console.error("Failed to fetch countries:", e);
      }
    })();
  }, []);

  useEffect(() => {
    if (!countryToShow || weather?.name === countryToShow.capital[0]) {
      return;
    }

    const getCountryWeather = async () => {
      try {
        const data = await getWeather(countryToShow.capitalInfo.latlng);
        setWeather(data);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      }
    };

    getCountryWeather();
  }, [countryToShow]);

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleFilter = (val: string) => {
    setFilter(val);
    setSelectedCountry(null);
  };

  return (
    <>
      <header>
        <h1>Countries</h1>
      </header>

      <main>
        <Filter onFilter={handleFilter} value={filter} />

        {!countryToShow && filter && (
          <FilterResults
            countries={filteredCountries}
            onSelectCountry={handleSelectCountry}
          />
        )}

        {countryToShow && (
          <>
            <CountryInfo country={countryToShow} />
            <CountryWeather weather={weather} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
