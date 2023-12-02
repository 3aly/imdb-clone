import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    main: { display: "flex", flexDirection: "column" },
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
    loader: {},
    loading: {
      display: "block",
    },
  };
});
