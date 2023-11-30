import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "50vh",
      alignItems: "center",
      height: "15vh",

      marginY: "3%",
      justifyContent: "space-between",
      alignContent: "space-between",
    },
    iconsContainer: {
      display: "flex",
      flexDirection: "row",
      width: "90%",
      justifyContent: "space-between",
      alignItems: "space-between",
    },
    linksContainer: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "space-between",
    },
    mediaContainer: {
      height: "50vh",
    },
  };
});
