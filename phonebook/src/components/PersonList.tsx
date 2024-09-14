import { Person } from "src/types";

/*** PersonItem ***/

type PersonItemProps = {
  person: Person;
  onDelete: (person: Person) => void;
};

const PersonItem = ({ person, onDelete }: PersonItemProps) => {
  const handleDelete = () => {
    onDelete(person);
  };

  return (
    <li>
      {person.name} - {person.number} <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

/*** PersonList ***/

type PersonListProps = {
  persons: Person[];
  onDeletePerson: (person: Person) => void;
};

export const PersonList = ({ persons, onDeletePerson }: PersonListProps) => {
  return (
    <ul>
      {persons.map((person) => (
        <PersonItem person={person} key={person.id} onDelete={onDeletePerson} />
      ))}
    </ul>
  );
};
