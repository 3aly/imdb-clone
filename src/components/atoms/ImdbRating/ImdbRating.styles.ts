import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    logoContainer: {
      display: "flex",
      flexDirection: "row",
      width: 90,
      alignItems: "center",
      justifyContent: "space-between",
    },
  };
});
