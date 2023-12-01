import { createTheme, responsiveFontSizes } from "@mui/material";
import { hiddenBig, hiddenSmall, responsiveIcons } from "./themes/quickstyles";
export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ["DM Sans", "Arial", "sans-serif"].join(","),
      h6: {
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: 700,
      },
      h5: {
        fontSize: 16,
        fontWeight: 400,
      },
      h3: {
        fontSize: 16,
        fontWeight: 700,
      },
      h4: {
        fontSize: 38,
        fontWeight: 700,
      },
      subtitle1: { fontSize: 12, fontStyle: "normal", fontWeight: 700 },

      body1: {
        fontWeight: 500,
      },
    },
    palette: {
      primary: {
        main: "#FFFFFF",
        light: "#9CA3AF",
        dark: "#000",
        grey: "#111827",
        text: "#6B7280",
        logo: "#BE123C",
      },
      secondary: {
        main: "#111827",
        // light: "#111827",
        // logo: "#BE123C",
        // text: "#6B7280",
      },
    },
  })
);

export const quickStyles = {
  hiddenBig,
  hiddenSmall,
  responsiveIcons,
};
