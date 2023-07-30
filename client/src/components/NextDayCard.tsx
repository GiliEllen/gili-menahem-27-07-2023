import { Paper, Typography, Stack, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { weatherIcons } from "../Types/types";
import { Player } from "@lottiefiles/react-lottie-player";
import { useAppSelector } from "../app/hooks";
import { unitSelector } from "../features/unit/unitSlice";
import { viewPortSelector } from "../features/viewport/viewportSlice";

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
        <Player
          style={{ width: "100px" }}
          autoplay
          loop
          src={findIcon()}
        ></Player>
        <Box>
          <Typography>
            {weekday} {calculateDate()}
          </Typography>
          <Typography>{day.Day.IconPhrase}</Typography>
        </Box>

        <Typography>
          {calculateAvreageTemp()} {day.Temperature.Minimum.Unit}{" "}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default NextDayCard;
