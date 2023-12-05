import { Box, SvgIcon, Typography } from "@mui/material";

import { IMAGES } from "../../../assets";
import { useStyles } from "./RottenRating.styles";

type RottenRatingProps = {
  rating: number;
};

export const RottenRating = ({ rating = 0 }: RottenRatingProps) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.logoContainer}>
      <SvgIcon fontSize="inherit" className={classes.logo}>
        <image href={IMAGES.rotten} width="24" height="24" />
      </SvgIcon>

      <Typography
        className={classes.text}
        variant="subtitle1"
        color="secondary.main"
      >
        {((rating - 2) * 10).toFixed(1)}%
      </Typography>
    </Box>
  );
};
