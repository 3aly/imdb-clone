import { quickStyles } from "./../../../constants/index";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    container: {
      ...quickStyles.layouts.selfStart,
    },
  };
});
