import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { useAppSelector } from "../app/hooks";
import { weatherSelector } from "../features/weather/weatherSlice";
import WeatherMain from "../components/WeatherMain";
import UnitPreference from "../components/UnitPreference";
import { Container, Stack } from "@mui/material";

const WeatherPage = () => {
  // const weather = useAppSelector(weatherSelector);
  return (
    <Container>
      <Header />
      <Container sx={{ mt: 10, mb: 2 }}>
        <Search />
      </Container>

      <WeatherMain />
      {/* {weather ? <p> {JSON.stringify(weather)}</p> : null} */}
    </Container>
  );
};

export default WeatherPage;
