import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h6: {
      fontSize: 24,
      fontStyle: "normal",
      fontFamily: "DM Sans",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "DM Sans",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: 400,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "italic",
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#9CA3AF",
      text: "#6B7280",
      logo: "#BE123C",
    },
    secondary: {
      main: "#000",
      light: "#111827",
    },
  },
});
