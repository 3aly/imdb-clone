import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    moreIconContainer: {
      background: "rgba(243, 244, 246, 0.50)",
      backdropFilter: "blur(1px)",
      margin: theme.spacing(2),
    },
    cardContainer: {
      height: "auto",
      justifyContent: "center",
      boxShadow: "none",
      borderRadius: 0,
      width: theme.spacing(27),
    },
    cardContentContainer: {
      display: "flex",
      flexDirection: "column",
      padding: 0,
      marginTop: theme.spacing(1),
    },
    movieTitle: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 2, // Limit to 2 lines
      "-webkit-box-orient": "vertical",
    },
    mediaContainer: {
      height: theme.spacing(40),
      display: "flex",

      alignItems: "flex-start",
      alignContent: "flex-start",
      justifyContent: "flex-end",
    },
    logoContainer: {
      justifyContent: "space-between",
      flexDirection: "row",
    },
  };
});
