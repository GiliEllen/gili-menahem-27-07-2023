import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#5abcff',
        },
        background: {
          default: '#0b131e',
          paper: '#202c3c',
        },
      },
});

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
          main: '#0495f8',
        },
        background: {
          default: '#f5f5f5',
        },
      },
})

export {darkTheme, lightTheme}