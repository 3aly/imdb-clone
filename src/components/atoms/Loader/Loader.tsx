import CircularProgress from "@mui/material/CircularProgress";
import { useStyles } from "./Loader.styles";

export const Loader = ({ isLoading = false }) => {
  const { classes } = useStyles();
  return (
    <>
      <CircularProgress
        sx={{ opacity: isLoading ? 1 : 0 }}
        className={classes.loader}
      />
    </>
  );
};
