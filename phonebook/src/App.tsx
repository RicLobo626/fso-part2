import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { PersonForm, PersonList, Filter } from "src/components";
import { Person, PersonFormValues } from "src/types";
import { getPersons, createPerson, deletePerson } from "src/services/persons";

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

  const handleDeletePerson = async (person: Person) => {
    if (!window.confirm(`Delete ${person.name}?`)) {
      return;
    }

    try {
      await deletePerson(person.id);
      setPersons(persons.filter(({ id }) => id !== person.id));
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const values = Object.fromEntries(formData.entries()) as PersonFormValues;

    const isNew = !persons.some(({ name }) => name === values.name);

    if (!isNew) {
      window.alert(`${values.name} is already added to phonebook`);
      return;
    }

    try {
      const person = await createPerson(values);

      setPersons(persons.concat(person));

      formEl.reset();
    } catch (e) {
      console.error("Error creating person", e);
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
        <PersonList persons={filteredPersons} onDeletePerson={handleDeletePerson} />
      </section>
    </main>
  );
};

export default App;
