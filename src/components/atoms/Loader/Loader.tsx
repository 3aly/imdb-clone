import CircularProgress from "@mui/material/CircularProgress";
import { useStyles } from "./Loader.styles";
import { LoaderProps } from "../../../types";

export const Loader = ({ isLoading = true }: LoaderProps) => {
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
