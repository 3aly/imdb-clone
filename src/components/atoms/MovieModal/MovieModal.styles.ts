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
      backgroundColor: theme.palette.background.paper,
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
