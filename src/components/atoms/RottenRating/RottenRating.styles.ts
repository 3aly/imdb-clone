import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    logoContainer: {
      display: "flex",
      flexDirection: "row",
      width: "7vh",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "space-between",
    },
    text: {
      marginLeft: "11%",
    },
  };
});
