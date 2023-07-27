import React from "react";
import { useAppSelector } from "../app/hooks";
import { weatherSelector } from "../features/weather/weatherSlice";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { Player } from '@lottiefiles/react-lottie-player';
import * as Sunny from "../assets/animations/sunny.json"

const WeatherMain = () => {
  const weather = useAppSelector(weatherSelector);

  return (
    <Container>
      <Paper>
        {weather ? (
          <>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack direction={"row"}>
                <Box>
                    <Player style={{width: "100px"}} autoplay src={Sunny}></Player>
                </Box>
                <Box>
                    <Typography>city</Typography>
                    <Typography>temp</Typography>
                </Box>
              </Stack>
              <Box>Favorites</Box>
            </Stack>
            <Box>Main Weather Text</Box>
            <Stack direction={"row"} justifyContent={"space-evenly"}>
              Five Day forecast
            </Stack>
          </>
        ) : (
          <Box>
            <Typography>No weather</Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default WeatherMain;
