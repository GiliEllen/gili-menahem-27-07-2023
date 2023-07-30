import { Paper } from "@mui/material";
import { FC } from "react";
import { Typography } from "@mui/material";
import { useAppSelector } from "../app/hooks";
import { unitSelector } from "../features/unit/unitSlice";
import { Player } from "@lottiefiles/react-lottie-player";
import { weatherIcons } from "../Types/types";
import { useNavigate } from "react-router-dom";

interface CityCardProps {
  cityInfo: any;
}

const CityCard: FC<CityCardProps> = ({ cityInfo }) => {
  const unit = useAppSelector(unitSelector);
  const navigate = useNavigate();

  const findIcon = () => {
    const result = weatherIcons.filter(
      (icon) => icon.iconNumber == cityInfo.info.WeatherIcon
    );
    return result[0].icon;
  };

  const handleClick = () => {
    navigate("/", {
      state: { cityKey: cityInfo.cityKey, cityName: cityInfo.cityName },
    });
  };
  return (
    <Paper onClick={handleClick} sx={{padding:2}}>
      <Player
        style={{ width: "100px" }}
        autoplay
        loop
        src={findIcon()}
      ></Player>
      <Typography variant="h5">{cityInfo.cityName}</Typography>
      <Typography>{cityInfo.info.WeatherText}</Typography>
      {unit === "C" ? (
        <Typography>
          {`${cityInfo.info.Temperature.Metric.Value} C`}{" "}
        </Typography>
      ) : (
        <Typography>{`${cityInfo.info.Temperature.Imperial.Value} F`}</Typography>
      )}
      {/* {cityInfo.info} */}
    </Paper>
  );
};

export default CityCard;
