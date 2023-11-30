import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "50vh",
      alignItems: "center",
      height: "15vh",

      margin: "5vh 0vh",
      justifyContent: "space-between",
      alignContent: "space-between",
    },
    iconsContainer: {
      display: "flex",
      flexDirection: "row",
      width: "50%",
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
  };
});
