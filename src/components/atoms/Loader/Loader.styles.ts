import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    loader: {
      borderRadius: "50%",
      transition: "opacity 0.5s ease-in-out",
      color: theme.palette.primary.logo,
    },
  };
});
