import { useState, FormEvent, ChangeEvent } from "react";
import { PersonForm, PersonList, Filter } from "./components";
import { Person } from "./types";

const App = () => {
  const [filter, setFilter] = useState("");
  const [persons, setPersons] = useState<Person[]>([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

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
