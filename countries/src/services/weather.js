import axios from "axios";

const key = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (latlng) => {
  const [lat, lon] = latlng;

  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
  );

  return data;
};
