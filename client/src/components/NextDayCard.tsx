import { Paper, Typography, Stack, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { weatherIcons } from "../Types/types";
import { Player } from "@lottiefiles/react-lottie-player";
import { useAppSelector } from "../app/hooks";
import { unitSelector } from "../features/unit/unitSlice";
import { viewPortSelector } from "../features/viewport/viewportSlice";
import {motion} from "framer-motion"

interface NextDayCard {
  dayIdx: number;
  day: any;
}

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
  const view = useAppSelector(viewPortSelector);

  const calculateDay = () => {
    const d = new Date();
    setWeekDay(weekdays[d.getDay() + dayIdx]);
  };
  const calculateDate = () => {
    const date = new Date(day.Date);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };
  const calculateAvreageTemp = () => {
    return Math.round(
      (day.Temperature.Minimum.Value + day.Temperature.Maximum.Value) / 2
    );
  };

  const findIcon = () => {
    const result = weatherIcons.filter(
      (icon) => icon.iconNumber == day.Day.Icon
    );
    return result[0].icon;
  };

  useEffect(() => {
    calculateDay();
    calculateDate();
  }, []);
  return (
    <Paper sx={{ padding: 2 }}>
      <Stack
        direction={view ? "row" : "column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5">{weekday}</Typography>
        <Typography>{calculateDate()}</Typography>
        <Box style={{width :"100px"}}>
          <Player
            style={{ width: "100%" }}
            autoplay
            loop
            src={findIcon()}
          ></Player>
        </Box>

        <Typography variant="h5">{day.Day.IconPhrase}</Typography>

        <Typography>
          Average: {calculateAvreageTemp()} {day.Temperature.Minimum.Unit}°{" "}
        </Typography>
        <Typography>
          <span className="large_font">
            {day.Temperature.Maximum.Value}
            {day.Temperature.Maximum.Unit}°
          </span>
          /{day.Temperature.Minimum.Value}
          {day.Temperature.Minimum.Unit}°
        </Typography>
      </Stack>
    </Paper>
  );
};

export default NextDayCard;
