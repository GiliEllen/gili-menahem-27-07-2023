import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../App";
import { useAppSelector } from "../app/hooks";
import { locationSelector } from "../features/location/locationSlice";
import { fakeResTelAvivInfoFiveMetric } from "../util/fakeResponse";
import { Container } from "@mui/material";
import NextDayCard from "./NextDayCard";
import { Stack } from "@mui/material";

const WeatherNext = () => {
  const [nextFiveDays, setNextFiveDays] = useState<any[]>([]);

  const location = useAppSelector(locationSelector);

  const handleGetNextForecast = async () => {
    try {
      const { data } = await axios.get(
        `${API}/forecasts/v1/daily/5day/${location.Key}&metric=true`
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setNextFiveDays(fakeResTelAvivInfoFiveMetric.DailyForecasts);
  }, [location]);
  return (
    <Stack direction={"row"} justifyContent={"space-evenly"} gap={8}>
      {nextFiveDays.length > 0 ? (
        nextFiveDays.map((day, idx) => {
          return <NextDayCard dayIdx={idx} day={day}/>;
        })
      ) : (
        <p>No waether</p>
      )}
    </Stack>
  );
};

export default WeatherNext;
