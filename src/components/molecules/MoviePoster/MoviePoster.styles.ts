import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    CardContainer: {
      height: "auto",
      justifyContent: "center",
      boxShadow: "none",
      borderRadius: 0,
      maxWidth: "90%",
    },
    cardContentContainer: {
      display: "flex",
      flexDirection: "column",
      padding: 0,
      marginTop: "3%",
    },
    movieTitle: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 2, // Limit to 2 lines
      "-webkit-box-orient": "vertical",
    },
    mediaContainer: {
      height: "50vh",
    },
  };
});
