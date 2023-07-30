import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setWeather, weatherSelector } from "../features/weather/weatherSlice";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import * as Sunny from "../assets/animations/sunny.json";
import {
  locationSelector,
  setLocationSelector,
} from "../features/location/locationSlice";
import WeatherNext from "./WeatherNext";
import { weatherIcons } from "../Types/types";
import { unitSelector } from "../features/unit/unitSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { API } from "../App";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { fakeResTelAvivInfo, fakeTelAviv } from "../util/fakeResponse";

const WeatherMain = () => {
  const location = useLocation();
  const [fav, setFav] = useState<boolean>(false);
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
      if (location && location.state && location.state.cityKey) {
        const { data } = await axios.get(
          `${API}/currentconditions/v1/${location.state.cityKey}?apikey=%093vMphpay81AU2hjh6QZXGlketl9M62WJ`
        );
        console.log(data);

        dispatch(setWeather(data[0]));
        const response = await axios.get(
          `${API}/locations/v1/cities/autocomplete?apikey=%093vMphpay81AU2hjh6QZXGlketl9M62WJ&q=${location.state.cityName}&language=en-us`
        );
        dispatch(setLocationSelector(response.data[0]));
      } else {
        //default is telAviv
        const { data } = await axios.get(
          `${API}/currentconditions/v1/215854?apikey=%093vMphpay81AU2hjh6QZXGlketl9M62WJ`
        );
        console.log(data);
        dispatch(setWeather(data[0]));

        const response = await axios.get(
          `${API}/locations/v1/cities/autocomplete?apikey=%093vMphpay81AU2hjh6QZXGlketl9M62WJ&q=tel&language=en-us`
        );
        dispatch(setLocationSelector(response.data[0]));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handlecheckIfFav();
  }, [locationGlobal]);

  // useEffect(() => {
  //   getWeatherDefault();
  // }, []);

  useEffect(() => {
    dispatch(setWeather(fakeResTelAvivInfo[0]));
    dispatch(setLocationSelector(fakeTelAviv));
  }, []);

  return (
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
            {/* <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack direction={"row"}>
                <Box>
                  <Player
                    style={{ width: "100px" }}
                    autoplay
                    src={weatherIcons[1].icon}
                  ></Player>
                </Box>
                <Box>
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
                </Box>
              </Stack>
              <Box onClick={handleSetFav}>
                {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </Box>
            </Stack> */}
            {/* <Stack direction={"row"} justifyContent={"center"}>
              <Typography variant="h2">{weather.WeatherText}</Typography>
            </Stack> */}
          </>
        ) : (
          <Box>
            <Typography>No weather</Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default WeatherMain;
