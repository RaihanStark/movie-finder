import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1D58F4",
    },
    secondary: {
      main: green[500],
    },
    gray: {
      light: "#8E90A0",
    },
  },
});

export default theme;
