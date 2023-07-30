import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Stack, Switch } from "@mui/material";
import FahrenheitSVG from "../assets/svg/fahrenheit-meausre-svgrepo-com-white.svg"
import CelsiusSVG from "../assets/svg/celsius-degrees-symbol-of-temperature-svgrepo-com-white.svg"

interface CustomSwitchProps {
  rightLabel: string;
  leftLabel: string;
  imgRight?: string;
  imgLeft?: string;
}

const CustomSwitch: FC<CustomSwitchProps> = ({
  rightLabel,
  leftLabel,
  imgRight,
  imgLeft,
}) => {
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  return (
    <Stack direction={"row"}>
      {leftLabel ? <Typography>{leftLabel}</Typography> : null}

      <MaterialUISwitch sx={{ m: 1 }} defaultChecked aria-label="" />
      {rightLabel ? <Typography>{rightLabel}</Typography> : null}
    </Stack>
  );
};

export default CustomSwitch;
