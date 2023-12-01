import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    appBar: {
      backgroundColor: "transparent",
      boxShadow: "none",
      transition: "background-color 0.3s ease-in-out",
    },
    appBarScrolled: {
      backgroundColor: theme.palette.primary.logo,
    },
    toolbarContainer: {
      margin: "0.5% 5%",
      justifyContent: "space-between",
    },
    logoIconContainer: {
      marginRight: "3vh",
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.logo,
    },
    logoIconContainerScrolled: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.logo,
    },
    menuIconContainer: {
      // marginRight: "5vh",
      marginLeft: "6vh",

      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.logo,
    },
    menuIconContainerScrolled: {
      // marginRight: 70,
      // marginLeft: 30,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.logo,
    },
  };
});
