import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    gridContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    image: {
      maxWidth: "100%",
      objectFit: "cover",
    },
    title: {
      marginBottom: theme.spacing(2),
    },
    subTitle: {
      marginBottom: theme.spacing(1),
    },
    description: {},
  };
});
