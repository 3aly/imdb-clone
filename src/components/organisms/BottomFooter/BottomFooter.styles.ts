import { quickStyles } from "../../../constants/index";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      ...quickStyles.layouts.col,
      ...quickStyles.layouts.yCentered,
      ...quickStyles.layouts.justifyBetween,

      height: theme.spacing(20),

      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
    },
    iconsContainer: {
      ...quickStyles.layouts.row,
      ...quickStyles.layouts.justifyBetween,
      ...quickStyles.layouts.alignBetween,
      width: theme.spacing(30),
      "@media (max-width: 900px)": {
        width: theme.spacing(40),
      },
      "@media (max-width: 400px)": {
        width: theme.spacing(30),
      },
    },
    linksContainer: {
      ...quickStyles.layouts.row,
      ...quickStyles.layouts.justifyBetween,
      ...quickStyles.layouts.alignBetween,

      width: theme.spacing(55),
      "@media (max-width: 900px)": {
        width: theme.spacing(50),
      },
      "@media (max-width: 500px)": {
        width: theme.spacing(38),
      },
    },
    text: {
      "@media (max-width: 900px)": {
        fontSize: 14,
      },
      "@media (max-width: 500px)": {
        fontSize: 11,
      },
    },
  };
});
