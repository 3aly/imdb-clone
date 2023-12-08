import { quickStyles } from "./../../../constants/index";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    modal: {
      ...quickStyles.layouts.row,
      ...quickStyles.layouts.allCentered,
    },
    gridContainer: {
      ...quickStyles.layouts.col,
      ...quickStyles.layouts.justifyEnd,
    },
    paper: {
      // backgroundColor: theme.palette.background.paper,
      backgroundColor: theme.palette.primary.contrastText,

      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    image: {
      maxWidth: "100%",
      objectFit: "cover",
    },
    title: {
      marginBottom: theme.spacing(2),
      color: theme.palette.secondary.contrastText,
    },
    subTitle: {
      marginBottom: theme.spacing(1),
      color: theme.palette.secondary.contrastText,
    },
    description: {
      color: theme.palette.secondary.contrastText,
    },
  };
});
