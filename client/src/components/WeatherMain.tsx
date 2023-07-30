import React from "react";
import { useAppSelector } from "../app/hooks";
import { weatherSelector } from "../features/weather/weatherSlice";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import * as Sunny from "../assets/animations/sunny.json";
import { locationSelector } from "../features/location/locationSlice";
import WeatherNext from "./WeatherNext";
import { weatherIcons } from "../Types/types";
import { unitSelector } from "../features/unit/unitSlice";

const WeatherMain = () => {
  const weather = useAppSelector(weatherSelector);
  const location = useAppSelector(locationSelector);
  const unit = useAppSelector(unitSelector);

  return (
    <Container>
      <Paper>
        {weather && location ? (
          <>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack direction={"row"}>
                <Box>
                  <Player
                    style={{ width: "100px" }}
                    autoplay
                    src={weatherIcons[1].icon}
                  ></Player>
                </Box>
                <Box>
                  <Typography>{location.LocalizedName}</Typography>
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
              <Box>Favorites</Box>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"}>
              <Typography variant="h2">{weather.WeatherText}</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-evenly"}>
              <WeatherNext />
            </Stack>
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
