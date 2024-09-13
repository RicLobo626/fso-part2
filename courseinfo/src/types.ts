export type CoursePart = {
  name: string;
  exercises: number;
};

export type Course = {
  name: string;
  parts: CoursePart[];
};
