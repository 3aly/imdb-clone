import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    logoContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      marginRight: "11%",
    },
  };
});
