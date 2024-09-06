import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const Light = createTheme({
  palette: {
    primary: {
      main: blueGrey[700],
      dark: blueGrey[500],
      contrastText: "#ffffff",
    },
    background: {
      default: "#f7f6f3",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Open sans",
    fontWeightRegular: "lighter",
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});
