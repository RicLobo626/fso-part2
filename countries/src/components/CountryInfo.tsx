import { Country } from "src/types";

type Props = {
  country: Country;
};

export const CountryInfo = ({ country }: Props) => {
  return (
    <section>
      <h2>{country.name.common}</h2>

      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>

      <h3>Languages</h3>

      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <img src={country.flags.png} className="flag" alt={country.flags.alt} />
    </section>
  );
};
