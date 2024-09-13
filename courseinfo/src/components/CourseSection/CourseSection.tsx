import { Total, CourseContent } from "src/components";
import { Course } from "src/types";

type Props = {
  course: Course;
};

export const CourseSection = ({ course }: Props) => {
  const total = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <section>
      <h2>{course.name}</h2>

      <CourseContent parts={course.parts} />

      <Total total={total} />
    </section>
  );
};
