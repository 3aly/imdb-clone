import { quickStyles } from "./../../../constants/index";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    moreIconContainer: {
      background: "rgba(243, 244, 246, 0.50)",
      backdropFilter: "blur(1px)",
      margin: theme.spacing(2),
    },
    cardContainer: {
      ...quickStyles.layouts.xCentered,
      backgroundColor: theme.palette.primary.main,

      height: "auto",
      boxShadow: "none",
      borderRadius: 0,
      width: theme.spacing(27),
      "@media (max-width: 500px)": {
        width: "95%",
      },
    },
    cardContentContainer: {
      ...quickStyles.layouts.col,

      padding: 0,
      marginTop: theme.spacing(1),
    },
    movieTitle: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "@media (max-width: 500px)": {
        width: "85%",
        fontSize: 18,
      },
      genreTitle: {
        // overflow: "hidden",
        // textOverflow: "ellipsis",
        // display: "-webkit-box",
        "@media (max-width: 500px)": {
          width: "8%",
          fontSize: 11,
        },
      },
    },
    mediaContainer: {
      height: theme.spacing(40),
      ...quickStyles.layouts.row,
      ...quickStyles.layouts.alignStart,
      ...quickStyles.layouts.contentStart,
      ...quickStyles.layouts.justifyEnd,
    },
    logoContainer: {
      ...quickStyles.layouts.row,
      ...quickStyles.layouts.justifyBetween,
    },
  };
});
