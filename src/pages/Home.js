import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import { Weather } from "../components/Weather";
import { useCurrentWeather } from "../lib/useCurrentWeather";

export const Home = () => {
  const { lat, lon } = useCurrentWeather();

  const { data, isLoading } = useQuery(["weather", lat, lon], getWeather);
  // =>api에 요청할때 사용하는 hook
  // =>useQuery를 사용할땐 반드시 QueryClientProvider를 설정해 줄 것
  // =>useQuery([queryKey], 요청할 함수)

  console.log(data);
  // console.log(isLoading);

  return <>{isLoading ? "loading" : <Weather data={data} />}</>;
};

// *리액트 life cycle(생명주기)
// 1.생성
// 2.랜더
// 3.마운트
