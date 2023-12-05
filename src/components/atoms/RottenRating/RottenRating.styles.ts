import { quickStyles } from "./../../../constants/index";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    logoContainer: {
      ...quickStyles.layouts.row,
      ...quickStyles.layouts.yCentered,
      ...quickStyles.layouts.contentCenter,
      ...quickStyles.layouts.justifyBetween,

      width: theme.spacing(8),
      "@media (max-width: 500px)": {
        width: theme.spacing(8),
      },
    },
    text: {
      "@media (max-width: 500px)": {
        width: "50%",

        fontSize: 10,
      },
    },
  };
});
