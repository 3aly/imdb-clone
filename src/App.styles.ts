import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      margin: "0vh 13vh",
      marginTop: "2%",
    },
    loader: {
      // position: "fixed",
      // top: "50%",
      // left: "50%",
      // transform: "translate(-50%, -50%)",
      // zIndex: 1,
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      background: theme.palette.primary.logo,
      // padding: 15,
      // borderWidth: "1px",
      // borderStyle: "solid",
      // borderRadius: "50%",
    },
    loading: {
      display: "block",
    },
  };
});
