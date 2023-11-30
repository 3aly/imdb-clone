import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    logoContainer: {
      display: "flex",
      flexDirection: "row",
      width: "22%",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "space-between",
    },
  };
});
