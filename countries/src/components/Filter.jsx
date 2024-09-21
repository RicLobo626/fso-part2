export const Filter = ({ onFilter, value }) => {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <label htmlFor="filter">
      Find countries
      <input value={value} onChange={handleChange} id="filter" type="text" />
    </label>
  );
};
