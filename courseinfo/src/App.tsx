import { Header, Total, Content } from "src/components";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  const total = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <>
      <Header course={course.name} />

      <main>
        <Content parts={course.parts} />
        <Total total={total} />
      </main>
    </>
  );
};

export default App;
