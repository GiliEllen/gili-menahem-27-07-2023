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

export const API = "https://dataservice.accuweather.com";
export const API_KEY = "3vMphpay81AU2hjh6QZXGlketl9M62WJ";
// export const API_KEY = "AC3b5RkzLdGpmtWKHdzauR4fO0Bx1D60";

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
      <AnimatedRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
