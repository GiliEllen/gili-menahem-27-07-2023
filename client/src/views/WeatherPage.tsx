import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { useAppSelector } from "../app/hooks";
import { weatherSelector } from "../features/weather/weatherSlice";
import WeatherMain from "../components/WeatherMain";
import UnitPreference from "../components/UnitPreference";
import { Container, Stack } from "@mui/material";
import WeatherNext from "../components/WeatherNext";
import { motion } from "framer-motion";
import { fadeIn } from "./../assets/animations/framer-motion/animation";

const WeatherPage = () => {
  // const weather = useAppSelector(weatherSelector);
  return (
    <motion.div
      intial={{ opacity: 0 }}
      variants={fadeIn("right", "spring", 0, 1)}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Container sx={{ mt: 10, mb: 2 }}>
          <Search />
        </Container>
        <WeatherMain />
        <WeatherNext />

        {/* {weather ? <p> {JSON.stringify(weather)}</p> : null} */}
      </Container>
    </motion.div>
  );
};

export default WeatherPage;
