import { quickStyles } from "./constants/index";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    main: {
      display: "flex",
      flexDirection: "column",
      fontFamily: '"DM Sans", sans-serif',

      colorScheme: "light dark",
      color: theme.palette.secondary.contrastText, // Change this to your desired color
      backgroundColor: "white", // Change this to your desired background color
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: "normal",
      fontSynthesis: "none",
      textRendering: "optimizeLegibility",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },
    darkBG: {
      backgroundColor: "#1b1717", // Change this to your desired background color
    },

    container: {
      ...quickStyles.layouts.col,
      ...quickStyles.layouts.allCentered,
      marginLeft: theme.spacing(11),
      marginRight: theme.spacing(11),
      marginTop: "2%",
      "@media (max-width: 600px)": {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },
    },
    loader: {},
    loading: {
      display: "block",
    },
  };
});
