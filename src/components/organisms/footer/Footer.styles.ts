import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: theme.spacing(20),

      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
      justifyContent: "space-between",
      alignContent: "space-between",
    },
    iconsContainer: {
      display: "flex",
      flexDirection: "row",
      width: theme.spacing(30),
      justifyContent: "space-between",
      alignItems: "space-between",
      "@media (max-width: 900px)": {
        width: theme.spacing(40),
      },
    },
    linksContainer: {
      display: "flex",
      flexDirection: "row",
      width: theme.spacing(55),
      justifyContent: "space-between",
      alignItems: "space-between",
      "@media (max-width: 900px)": {
        width: theme.spacing(50),
      },
    },
  };
});
