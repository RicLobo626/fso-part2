import { useEffect, useState } from "react";
import { getCountries } from "src/services/countries";
import { Country } from "src/types";
import { FilterResults, Filter } from "src/components";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [filter, setFilter] = useState("");

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase());
  });

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
            selectedCountry={selectedCountry}
          />
        )}
      </main>
    </>
  );
}

export default App;
