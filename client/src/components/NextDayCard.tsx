import { Container, Paper, Typography, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { weatherIcons } from "../Types/types";
import { Player } from "@lottiefiles/react-lottie-player";

const NextDayCard = ({ dayIdx, day }: any) => {
  const [weekday, setWeekDay] = useState("");
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const calculateDay = () => {
    const d = new Date();
    setWeekDay(weekdays[d.getDay() + dayIdx]);
  };
  const calculateDate = () => {
   const date = new Date(day.Date)
   return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
  }
  const calculateAvreageTemp = () => {
    return Math.round(
      (day.Temperature.Minimum.Value + day.Temperature.Maximum.Value) / 2
    );
  };

  const findIcon = () => {
    const result = weatherIcons.filter((icon) => icon.iconNumber == day.Day.Icon)
    return result[0].icon
  }

  useEffect(() => {
    calculateDay();
    calculateDate()
  }, []);
  return (
    <Paper>
      <Stack>
      <Player style={{width: "100px"}} autoplay loop src={findIcon()}></Player>
        <Typography>{weekday} {calculateDate()}</Typography>
        <Typography>{day.Day.IconPhrase}</Typography>
        <Typography>
          {calculateAvreageTemp()} {day.Temperature.Minimum.Unit}{" "}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default NextDayCard;
