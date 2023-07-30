import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../App";
import { useAppSelector } from "../app/hooks";
import { locationSelector } from "../features/location/locationSlice";
import { fakeResTelAvivInfoFiveImpirial, fakeResTelAvivInfoFiveMetric } from "../util/fakeResponse";
import { Container } from "@mui/material";
import NextDayCard from "./NextDayCard";
import { Stack } from "@mui/material";
import { unitSelector } from "../features/unit/unitSlice";

const WeatherNext = () => {
  const [nextFiveDays, setNextFiveDays] = useState<any[]>([]);

  const location = useAppSelector(locationSelector);
  const unit = useAppSelector(unitSelector);

  const handleGetNextForecast = async () => {
    try {
      if (unit === "C") {
        const { data } = await axios.get(
          `${API}/forecasts/v1/daily/5day/${location.Key}&metric=true`
        );
        setNextFiveDays(data.DailyForecasts)
      } else {
        const { data } = await axios.get(
          `${API}/forecasts/v1/daily/5day/${location.Key}`
        );
        setNextFiveDays(data.DailyForecasts)
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if(unit === "C") {
      setNextFiveDays(fakeResTelAvivInfoFiveMetric.DailyForecasts);
    } else {
      setNextFiveDays(fakeResTelAvivInfoFiveImpirial.DailyForecasts);
    }
  }, [location, unit]);
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
