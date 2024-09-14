import axios from "axios";
import { PersonFormValues } from "src/types";

const baseURL = "/api/persons";

export const getPersons = async () => {
  const { data } = await axios.get(baseURL);

  return data;
};

export const createPerson = async (person: PersonFormValues) => {
  const { data } = await axios.post(baseURL, person);

  return data;
};
