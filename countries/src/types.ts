export type Country = {
  name: {
    common: string;
  };
  area: number;
  capital: string[];
  flags: {
    png: string;
  };
  languages: {
    [code: string]: string;
  };
};
