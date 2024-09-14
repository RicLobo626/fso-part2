import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { PersonForm, PersonList, Filter } from "src/components";
import { Person } from "src/types";
import { getPersons } from "src/services";

const App = () => {
  const [filter, setFilter] = useState("");
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPersons();
        setPersons(data);
      } catch (e) {
        console.error("Error fetching persons", e);
      }
    })();
  }, []);

  const filteredPersons = persons.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase().trim());
  });

  const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const person = Object.fromEntries(formData.entries()) as Person;

    const isNew = !persons.some((p) => p.name === person.name);

    if (isNew) {
      setPersons(persons.concat(person));
    } else {
      window.alert(`${person.name} is already added to phonebook`);
    }
  };

  return (
    <main>
      <section>
        <h1>Phonebook</h1>

        <Filter onChange={handleChangeFilter} value={filter} />
      </section>

      <section>
        <h2>Add new</h2>
        <PersonForm onSubmit={handleSubmit} />
      </section>

      <section>
        <h2>Numbers</h2>
        <PersonList persons={filteredPersons} />
      </section>
    </main>
  );
};

export default App;
