import { getWeather } from "../api";

export const Home = () => {
  getWeather();
  return <div>home</div>;
};
