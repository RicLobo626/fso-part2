import { useState } from "react";
import { PersonForm, PersonList } from "./components";
import { FormEvent } from "react";
import { Person } from "./types";

const App = () => {
  const [persons, setPersons] = useState<Person[]>([
    { name: "Arto Hellas", number: "040-123456" },
  ]);

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
        <PersonForm onSubmit={handleSubmit} />
      </section>

      <section>
        <h2>Numbers</h2>
        <PersonList persons={persons} />
      </section>
    </main>
  );
};

export default App;
