import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    CardContainer: {
      flexGrow: 1,
      borderWidth: 1,
      borderRadius: 0,
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
      maxWidth: 300,
      width: 250,
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
