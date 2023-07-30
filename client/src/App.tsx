import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherPage from "./views/WeatherPage";
import FavoritesPage from "./views/FavoritesPage";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setUnitFromPrefernce, unitSelector } from "./features/unit/unitSlice";
import { useEffect } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { modeSelector } from "./features/mode/modeSlice";

export const API = "http://dataservice.accuweather.com";
export const API_KEY = "3vMphpay81AU2hjh6QZXGlketl9M62WJ";

function App() {
  const mode = useAppSelector(modeSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUnitFromPrefernce());
  }, []);

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeatherPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
