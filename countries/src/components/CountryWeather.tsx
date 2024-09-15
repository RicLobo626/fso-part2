import { Weather } from "src/types";

type Props = {
  weather: Weather | null;
};

export const CountryWeather = ({ weather }: Props) => {
  if (!weather) {
    return <div>Loading weather...</div>;
  }

  return (
    <section>
      <h3>Weather in {weather.name}</h3>
      <p>Temperature: {weather.main.temp} Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>Wind: {weather.wind.speed} m/s</p>
    </section>
  );
};
