import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    logoContainer: {
      display: "flex",
      flexDirection: "row",
      width: theme.spacing(8),
      alignItems: "center",
      alignContent: "center",
      justifyContent: "space-between",
    },
    text: {},
  };
});
