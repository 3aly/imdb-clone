import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    SearchBarStyle: {
      width: "50%",

      input: {
        height: "10px",
        color: "white",
        // lineHeight: "1px", // Add this line to maintain vertical centering

        // textAlign: "center", // Add this line to center the placeholder text
      },
      color: theme.palette.primary.main,
      "@media (max-width: 900px)": {
        width: "100%",
      },
      "& .MuiOutlinedInput-root": {
        "& .MuiInputBase-input": {
          // height: "2vh",

          // padding: "10px 14px",
          "@media (max-width: 900px)": {
            // height: "1vh",
          },
        },
        "& fieldset": {
          borderWidth: 2,
          borderRadius: 8,
          borderStyle: "solid",
          borderColor: theme.palette.primary.main,
        },

        "&.Mui-focused fieldset": {
          borderWidth: 2,
          borderRadius: 8,
          borderStyle: "solid",
          borderColor: theme.palette.primary.main,
        },
      },
    },
  };
});
