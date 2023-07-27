import { Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const NextDayCard = ({ day, temp, measure }: any) => {
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
    setWeekDay(weekdays[d.getDay()+ day]);
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
        {/* <Typography>{temp} {measure}</Typography> */}
      test
    </Paper>
  );
};

export default NextDayCard;
