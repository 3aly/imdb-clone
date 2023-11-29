import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    AppBarContainer: {
      backgroundColor: "transparent",
      boxShadow: "none",
      marginX: 5,

      padding: 15,
    },
    ToolbarContainer: {
      justifyContent: "space-between",
    },
    LogoIconContainer: {
      marginLeft: 70,
      marginRight: 30,

      backgroundColor: theme.palette.primary.logo,
    },
    MenuIconContainer: {
      marginRight: 70,
      marginLeft: 30,

      backgroundColor: theme.palette.primary.logo,
    },
  };
});
