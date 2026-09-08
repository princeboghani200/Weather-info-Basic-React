import { useState } from "react";
import InfoBox from "./components/InfoBox";
import SearchBox from "./components/SearchBox";

const getWeatherBackground = (weather = "", temperature, country = "") => {
  const condition = weather.toLowerCase();
  const northernCountries = ["CH", "NO", "SE", "FI", "IS", "CA", "RU", "GL"];
  const isSnowing = condition.includes("snow") || condition.includes("sleet");
  const isFreezing = temperature <= 0;
  const isVeryColdNorthernPlace = northernCountries.includes(country) && temperature <= 8;

  if (isSnowing || isFreezing || isVeryColdNorthernPlace) {
    return "/snow%20fall.jpg";
  }

  if (temperature <= 15) {
    return "/winter.jpg";
  }

  if (condition.includes("rain") || condition.includes("drizzle") || condition.includes("thunder")) {
    return "/rainy.jpg";
  }

  if (
    condition.includes("mist") ||
    condition.includes("fog") ||
    condition.includes("haze") ||
    condition.includes("smoke")
  ) {
    return "/smoky.jpg";
  }

  if (condition.includes("cloud")) {
    return "/daze.jpg";
  }

  return "/sunny.jpg";
};

const App = () => {
  const api_url = import.meta.env.VITE_API_URL;
  const api_key = import.meta.env.VITE_API_KEY;

  const [weatherInfo, setWeatherInfo] = useState({
    
  });

  const updateInfo = (info) => {
    setWeatherInfo(info);
  };

  const backgroundImage = getWeatherBackground(
    weatherInfo.weather,
    weatherInfo.temp,
    weatherInfo.country,
  );

  return (
    <div
      className="min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          `linear-gradient(rgba(239, 248, 255, 0.40), rgba(239, 248, 255, 0.60)), url('${backgroundImage}')`,
      }}
    >
      <div>
        <SearchBox
          api_url={api_url}
          api_key={api_key}
          updateInfo={updateInfo}
        />
        {weatherInfo.city && <InfoBox weatherInfo={weatherInfo} />}
      </div>
    </div>
  );
};

export default App;
