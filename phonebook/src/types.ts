export type Person = {
  id: number;
  name: string;
  number: string;
};

export type PersonFormValues = Omit<Person, "id">;
