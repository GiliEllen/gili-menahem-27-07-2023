import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setWeather, weatherSelector } from "../features/weather/weatherSlice";
import {
  Alert,
  Box,
  Container,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  locationSelector,
  setLocationSelector,
} from "../features/location/locationSlice";
import { weatherIcons } from "../Types/types";
import { unitSelector } from "../features/unit/unitSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { API, API_KEY } from "../App";
import axios from "axios";
import { useLocation } from "react-router-dom";
import CustomMuiToast from "./CustomMuiToast";

const WeatherMain = () => {
  const location = useLocation();
  const [fav, setFav] = useState<boolean>(false);
  const [errorDis, setErrorDis] = useState<boolean>(false);
  const [errorCon, setErrorCon] = useState<string>("");
  const [geoLocation, setGeoLocation] = useState<boolean>();
  const [fullGeoLocation, setFullGeoLocation] = useState<any>();

  const weather = useAppSelector(weatherSelector);
  const locationGlobal = useAppSelector(locationSelector);
  const unit = useAppSelector(unitSelector);
  const dispatch = useAppDispatch();

  const handlecheckIfFav = () => {
    if (locationGlobal) {
      if (sessionStorage.getItem(locationGlobal.Key)) {
        setFav(true);
      } else {
        setFav(false);
      }
    }
  };

  const handleSetFav = () => {
    const favNumber = locationGlobal.Key;

    if (fav) {
      setFav(false);
      sessionStorage.removeItem(favNumber);
    } else {
      setFav(true);
      sessionStorage.setItem(favNumber, locationGlobal.LocalizedName);
    }
  };

  const getWeatherDefault = async () => {
    try {
      console.log(location)
      if (location && location.state && location.state.cityKey) {
        const { data } = await axios.get(
          `${API}/currentconditions/v1/${location.state.cityKey}?apikey=${API_KEY}`
        );
        console.log(data)

        dispatch(setWeather(data[0]));
        const response = await axios.get(
          `${API}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${location.state.cityName}&language=en-us`
        );
        dispatch(setLocationSelector(response.data[0]));
        console.log(response)
      } else {
        // default is telAviv
        const { data } = await axios.get(
          `${API}/currentconditions/v1/215854?apikey=%093vMphpay81AU2hjh6QZXGlketl9M62WJ`
        );
        dispatch(setWeather(data[0]));

        const response = await axios.get(
          `${API}/locations/v1/cities/autocomplete?apikey=%093vMphpay81AU2hjh6QZXGlketl9M62WJ&q=tel&language=en-us`
        );
        dispatch(setLocationSelector(response.data[0]));

      }
    } catch (error: any) {
      setErrorDis(true);
      setErrorCon(`${error.message}}`);
      setTimeout(() => {
        setErrorCon("");
        setErrorDis(false);
      }, 3000);
    }
  };

  useEffect(() => {
    handlecheckIfFav();
  }, [locationGlobal]);

  useEffect(() => {
    getWeatherDefault();
  }, []);

  return (
    <>
      <Container>
        <Paper>
          {weather && locationGlobal ? (
            <>
              <Stack
                sx={{ padding: 8, position: "relative" }}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Stack>
                  <Typography>{locationGlobal.LocalizedName}</Typography>
                  {unit === "C" ? (
                    <Typography>
                      {weather.Temperature.Metric.Value}{" "}
                      {weather.Temperature.Metric.Unit}
                    </Typography>
                  ) : (
                    <Typography>
                      {weather.Temperature.Imperial.Value}{" "}
                      {weather.Temperature.Imperial.Unit}
                    </Typography>
                  )}
                  <Typography variant="h2">{weather.WeatherText}</Typography>
                  <Box
                    sx={{ position: "absolute", right: 50, top: 50, zIndex: 1 }}
                    onClick={handleSetFav}
                  >
                    {fav ? (
                      <FavoriteIcon color="error" fontSize="large" />
                    ) : (
                      <FavoriteBorderIcon fontSize="large" />
                    )}
                  </Box>
                </Stack>
                <Box>
                  <Player autoplay loop src={weatherIcons[1].icon}></Player>
                </Box>
              </Stack>
            </>
          ) : (
            <Box>
              <Typography>No Weather yet</Typography>
            </Box>
          )}
        </Paper>
      </Container>
      <CustomMuiToast errorDis={errorDis} errorCon={errorCon} />
    </>
  );
};

export default WeatherMain;
