import { useEffect, useState } from "react";
import { getCountries } from "src/services/countries";
import { Country, Weather } from "src/types";
import { FilterResults, Filter } from "src/components";
import { getWeather } from "./services/weather";

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

        {filter && (
          <FilterResults
            countries={filteredCountries}
            onSelectCountry={handleSelectCountry}
            countryToShow={countryToShow}
            weather={weather}
          />
        )}
      </main>
    </>
  );
}

export default App;
