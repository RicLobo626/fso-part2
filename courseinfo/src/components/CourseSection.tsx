import { Total } from "src/components";
import { Course, CoursePart } from "src/types";

/*** Part ***/

type PartProps = {
  part: CoursePart;
};

export const Part = ({ part }: PartProps) => {
  return (
    <li>
      {part.name} - {part.exercises} exercises
    </li>
  );
};

/*** CourseContent ***/

type CourseContentProps = {
  parts: CoursePart[];
};

export const CourseContent = ({ parts }: CourseContentProps) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part part={part} key={part.name} />
      ))}
    </ul>
  );
};

/*** CourseSection ***/

type CourseSectionProps = {
  course: Course;
};

export const CourseSection = ({ course }: CourseSectionProps) => {
  const total = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <section>
      <h2>{course.name}</h2>

      <CourseContent parts={course.parts} />

      <Total total={total} />
    </section>
  );
};
