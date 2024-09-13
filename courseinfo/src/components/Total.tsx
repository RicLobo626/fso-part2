type Props = {
  total: number;
};

export const Total = ({ total }: Props) => {
  return (
    <p>
      Total of <strong>{total}</strong> exercises
    </p>
  );
};
