import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { pxToRem } from "../assets/themes/functions/pxToRem";

export const Light = createTheme({
  palette: {
    primary: {
      main: "#fffff",
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
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color:"#000",
          textAlign:"left",
          fontSize: pxToRem(14),
          fontWeight: "normal",
        },
      },
    },
  },
});
