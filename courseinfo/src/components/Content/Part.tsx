import { CoursePart } from "src/types";

type Props = {
  part: CoursePart;
};

export const Part = ({ part }: Props) => {
  return (
    <li>
      {part.name} - {part.exercises} exercises
    </li>
  );
};
