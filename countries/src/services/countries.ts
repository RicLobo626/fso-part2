import axios from "axios";

export const getCountries = async () => {
  const { data } = await axios.get("/api/all");

  return data;
};
