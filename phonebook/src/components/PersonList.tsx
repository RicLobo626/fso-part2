import { Person } from "src/types";

type Props = {
  persons: Person[];
};

export const PersonList = ({ persons }: Props) => {
  return (
    <ul>
      {persons.map((p) => (
        <li key={p.name}>
          {p.name} - {p.number}
        </li>
      ))}
    </ul>
  );
};
