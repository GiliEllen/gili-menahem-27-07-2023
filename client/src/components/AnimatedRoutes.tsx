import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import WeatherPage from "../views/WeatherPage";
import FavoritesPage from "../views/FavoritesPage";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
