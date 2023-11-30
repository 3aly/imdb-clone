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
      <SvgIcon>
        <image href={IMAGES.rotten} width="24" height="24" />
      </SvgIcon>
      <Typography variant="subtitle1" color="grey">
        {(rating * 10).toFixed(1)}%
      </Typography>
    </Box>
  );
};
