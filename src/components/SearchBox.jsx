import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const SearchBox = (Props) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const api_url = Props.api_url;
  const api_key = Props.api_key;

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `${api_url}?q=${city}&appid=${api_key}&units=metric`,
      );
      const responseData = response.data;

      const result = {
        city,
        temp: responseData.main.temp,
        feels_like: responseData.main.feels_like,
        temp_max: responseData.main.temp_max,
        temp_min: responseData.main.temp_min,
        humidity: responseData.main.humidity,
        pressure: responseData.main.pressure,
        weather: responseData.weather[0].description,
        country: responseData.sys.country,
      };

      console.log(responseData);

      return result;
    } catch (err) {
      throw err;
    }
  };

  const Typing = (e) => {
    setCity(e.target.value);
    setError(false);
  };

  const submit = async (e) => {
    try {
      e.preventDefault();
      let info = await getWeatherData();
      Props.updateInfo(info);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="mx-auto max-w-xl px-6 pb-3 pt-2 sm:pb-5 sm:pt-7">
      <div className="mb-3 text-center sm:mb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
          Weather today
        </h1>
        <p className="mt-1 text-sm text-slate-500 sm:mt-2">
          Search for a city to see the latest conditions
        </p>
      </div>
      <form action="" onSubmit={submit}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <TextField
            id="outlined-basic"
            label="City name"
            variant="outlined"
            required
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                backgroundColor: "#ffffff",
                "&.Mui-focused fieldset": {
                  borderColor: "#1677a8",
                },
              },
            }}
            value={city}
            onChange={Typing}
          />
          <Button
            variant="contained"
            type="submit"
            className="!min-h-12 !rounded-xl !bg-sky-700 !px-7 !font-semibold !normal-case !shadow-md hover:!bg-sky-800 sm:!min-h-14"
          >
            Search
          </Button>
        </div>
      </form>
      {error && (
        <p className="mt-3 text-center text-sm font-medium text-red-600">
          No such place exists.
        </p>
      )}
    </div>
  );
};

export default SearchBox;
