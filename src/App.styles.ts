import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      marginLeft: theme.spacing(11),
      marginRight: theme.spacing(11),
      marginTop: "2%",
      "@media (max-width: 600px)": {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },
    },
    loader: {
      alignSelf: "center",
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      background: theme.palette.primary.logo,
    },
    loading: {
      display: "block",
    },
  };
});
