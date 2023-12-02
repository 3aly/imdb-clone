import { quickStyles } from "./../../../constants/index";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    logoContainer: {
      ...quickStyles.layouts.row,
      ...quickStyles.layouts.yCentered,
      ...quickStyles.layouts.justifyBetween,
    },
    logo: {
      marginRight: theme.spacing(1),
    },
  };
});
