import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setUnitFromPrefernce } from "./features/unit/unitSlice";
import { useEffect } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { modeSelector, setModeFromPrefernce } from "./features/mode/modeSlice";
import { setViewport } from "./features/viewport/viewportSlice";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Header from "./components/Header";
import WeatherPage from "./views/WeatherPage";
import FavoritesPage from "./views/FavoritesPage";

export const API = "http://dataservice.accuweather.com";
export const API_KEY = "3vMphpay81AU2hjh6QZXGlketl9M62WJ";

function App() {
  const mode = useAppSelector(modeSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUnitFromPrefernce());
    dispatch(setModeFromPrefernce());
  }, []);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? dispatch(setViewport(true))
        : dispatch(setViewport(false));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />

      <BrowserRouter>
        <Header />
        {/* <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/favorites" element={<FavoritesPage />} /> */}
      {/* </Routes> */}
      <AnimatedRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
