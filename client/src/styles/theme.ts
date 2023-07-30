import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5abcff",
    },
    background: {
      default: "#0b131e",
      paper: "#202c3c",
    },
  },
  typography: { fontFamily: ["Bai Jamjuree", "sans-serif"].join(",") },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0495f8",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: { fontFamily: ["Bai Jamjuree", "sans-serif"].join(",") },
});

export { darkTheme, lightTheme };
