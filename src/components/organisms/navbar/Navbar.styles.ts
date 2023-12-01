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
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),

      justifyContent: "space-between",
      "@media (max-width: 900px)": {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
      },
    },
    logoIconContainer: {
      marginRight: theme.spacing(4),
      "@media (max-width: 900px)": {
        marginRight: theme.spacing(2),
      },
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.logo,
    },
    logoIconContainerScrolled: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.logo,
    },
    menuIconContainer: {
      marginLeft: theme.spacing(4),

      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.logo,
      "@media (max-width: 900px)": {
        marginLeft: theme.spacing(2),
      },
    },
    menuIconContainerScrolled: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.logo,
    },
  };
});
