type Props = {
  course: string;
};

export const Header = ({ course }: Props) => {
  return (
    <header>
      <h1>{course}</h1>
    </header>
  );
};
