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

export type Weather = {
  name: string;
  main: {
    temp: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
};
