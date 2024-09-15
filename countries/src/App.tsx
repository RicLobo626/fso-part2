import { useEffect, useState } from "react";
import { getCountries } from "src/services/countries";
import { Country } from "src/types";
import { FilterResults, Filter } from "src/components";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filter, setFilter] = useState("");

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase());
  });

  const isFiltering = filter.length > 0;

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

  const handleFilter = (val: string) => setFilter(val);

  return (
    <>
      <header>
        <h1>Countries</h1>
      </header>

      <main>
        <Filter onFilter={handleFilter} value={filter} />

        {isFiltering && <FilterResults countries={filteredCountries} />}
      </main>
    </>
  );
}

export default App;
