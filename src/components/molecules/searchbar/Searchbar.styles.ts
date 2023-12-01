import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    SearchBarStyle: {
      width: "50%",

      input: { color: "white" },
      color: theme.palette.primary.main,
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderWidth: 2,
          borderRadius: 8,
          borderStyle: "solid",

          borderColor: theme.palette.primary.main,
        },
        "&.Mui-focused fieldset": {
          borderWidth: 1,
          borderRadius: 8,
          borderStyle: "solid",
          borderColor: theme.palette.primary.main,
        },
      },
    },
  };
});
