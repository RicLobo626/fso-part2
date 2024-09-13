import { CoursePart } from "src/types";
import { Part } from "src/components";

type Props = {
  parts: CoursePart[];
};

export const CourseContent = ({ parts }: Props) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part part={part} key={part.name} />
      ))}
    </ul>
  );
};
