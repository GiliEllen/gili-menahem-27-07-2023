import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Stack, Switch } from "@mui/material";
import { useAppSelector } from "../app/hooks";
import { unitSelector } from "../features/unit/unitSlice";

interface CustomSwitchProps {
  rightLabel: string;
  leftLabel: string;
  onClick: CallableFunction;
  imgRight?: string;
  imgLeft?: string;
}

const CustomSwitch: FC<CustomSwitchProps> = ({
  rightLabel,
  leftLabel,
  onClick,
  imgRight,
  imgLeft,
}) => {

  const unit = useAppSelector(unitSelector)

  return (
    <Stack direction={"row"}>
      {leftLabel ? <Typography>{leftLabel}</Typography> : null}
      <Switch
        sx={{
          "&.MuiSwitch-root .MuiSwitch-switchBase": {
            color: "#e7e7e7",
          }, "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
            backgroundColor: '#5e5e5e'
          },
        }}
        checked={unit==="C" ? true : false }
        onClick={(ev) => {
          onClick(ev);
        }}
      />
      {rightLabel ? <Typography>{rightLabel}</Typography> : null}
    </Stack>
  );
};

export default CustomSwitch;
