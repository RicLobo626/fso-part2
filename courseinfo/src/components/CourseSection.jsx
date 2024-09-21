import { Total } from ".";

/*** Part ***/

export const Part = ({ part }) => {
  return (
    <li>
      {part.name} - {part.exercises} exercises
    </li>
  );
};

/*** CourseContent ***/

export const CourseContent = ({ parts }) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part part={part} key={part.name} />
      ))}
    </ul>
  );
};

/*** CourseSection ***/

export const CourseSection = ({ course }) => {
  const total = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <section>
      <h2>{course.name}</h2>

      <CourseContent parts={course.parts} />

      <Total total={total} />
    </section>
  );
};
