import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    button: {
      position: "fixed",
      bottom: 20,
      left: 20,
      zIndex: 1,
      opacity: 0,
      visibility: "hidden",
      transition: "all 0.3s ease-in-out",
      color: "#fff",
      // padding: "10px 20px",
      // borderRadius: 5,
      cursor: "pointer",
      backgroundColor: theme.palette.primary.logo,
    },
    showButton: {
      opacity: 1,
      visibility: "visible",
    },
  };
});
