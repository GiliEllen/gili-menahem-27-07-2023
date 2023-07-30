import { Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

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
  const calculateAvreageTemp = () => {
    return Math.round(
      (day.Temperature.Minimum.Value + day.Temperature.Maximum.Value) / 2
    );
  };

  useEffect(() => {
    calculateDay();
  }, []);
  return (
    <Paper
      sx={{
        display: "flex",
        ustifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Typography>{weekday}</Typography>
      <Typography>
        {calculateAvreageTemp()} {day.Temperature.Minimum.Unit}{" "}
      </Typography>
    </Paper>
  );
};

export default NextDayCard;
