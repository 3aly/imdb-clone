import { useSelector } from "react-redux";
import { quickStyles } from "./constants/index";
import { makeStyles } from "tss-react/mui";
import { StoreType } from "./types";

export const useStyles = makeStyles()((theme, darkMode) => {
  // const { darkMode } = useSelector((state: StoreType) => state.theme);
  // console.log("darkMode", darkMode);
  return {
    main: {
      display: "flex",
      flexDirection: "column",
      fontFamily: '"DM Sans", sans-serif',

      colorScheme: "light dark",
      color: theme.palette.secondary.contrastText, // Change this to your desired color
      backgroundColor: darkMode ? "white" : "black", // Change this to your desired background color
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: "normal",
      fontSynthesis: "none",
      textRendering: "optimizeLegibility",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
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
      // backgroundColor: theme.palette.primary.light,
    },
    loader: {},
    loading: {
      display: "block",
    },
  };
});
