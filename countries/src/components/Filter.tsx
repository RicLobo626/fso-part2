import { ChangeEvent } from "react";

type Props = {
  onFilter: (value: string) => void;
  value: string;
};

export const Filter = ({ onFilter, value }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilter(e.target.value);
  };

  return (
    <label htmlFor="filter">
      Find countries
      <input value={value} onChange={handleChange} id="filter" type="text" />
    </label>
  );
};
