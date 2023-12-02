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
    },
    text: {},
  };
});
