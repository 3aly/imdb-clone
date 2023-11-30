import { Typography } from "@mui/material";
import { useStyles } from "./SectionTitle.styles";
import { SectionTitleProps } from "../../../types";

export const SectionTitle = ({ title }: SectionTitleProps) => {
  const { classes } = useStyles();

  return (
    <Typography
      mb={5}
      variant={"h4"}
      component="div"
      color={"primary.dark"}
      className={classes.container}
    >
      {title}
    </Typography>
  );
};
