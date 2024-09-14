import axios from "axios";

const baseURL = "/api/persons";

export const getPersons = async () => {
  const { data } = await axios.get(baseURL);

  return data;
};
