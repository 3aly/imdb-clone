import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    CardContainer: {
      height: "auto",
      justifyContent: "center",
      boxShadow: "none",
      borderRadius: 0,
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
    paper: {
      padding: 20,
      textAlign: "center",
    },
    poster: {
      width: "100%",
      height: "auto",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "@media (max-width: 600px)": {
      paper: {
        width: "1%",
        margin: "0 auto",
      },
    },
  };
});
