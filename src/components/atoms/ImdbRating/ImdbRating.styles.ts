import { quickStyles } from "./../../../constants/index";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    logoContainer: {
      ...quickStyles.layouts.row,
      ...quickStyles.layouts.yCentered,
      ...quickStyles.layouts.justifyBetween,
      "@media (max-width: 500px)": {
        fontSize: 9,
      },
    },
    text: {
      "@media (max-width: 500px)": {
        // width: "85%",
        fontSize: 9,
      },
    },
    logo: {
      marginRight: theme.spacing(1),
      // height: 25,
    },
  };
});
