import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.scss";
import { Container } from "@mui/material";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherPage from "./views/WeatherPage";
import FavoritesPage from "./views/FavoritesPage";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setUnitFromPrefernce, unitSelector } from "./features/unit/unitSlice";
import { useEffect } from "react";

export const API = "http://dataservice.accuweather.com";
export const API_KEY = "3vMphpay81AU2hjh6QZXGlketl9M62WJ";

function App() {
  const unit = useAppSelector(unitSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUnitFromPrefernce());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
