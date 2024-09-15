export type Country = {
  name: {
    common: string;
  };
  area: number;
  capital: string[];
  capitalInfo: {
    latlng: [number, number];
  };
  flags: {
    png: string;
    alt: string;
  };
  languages: {
    [code: string]: string;
  };
};
