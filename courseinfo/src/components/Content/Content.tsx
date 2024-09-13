import { CoursePart } from "src/types";
import { Part } from "src/components";

type Props = {
  parts: CoursePart[];
};

export const Content = ({ parts }: Props) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part part={part} key={part.name} />
      ))}
    </ul>
  );
};
