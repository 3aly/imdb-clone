import { Box, SvgIcon, Typography } from "@mui/material";

import { IMAGES } from "../../../assets";
import { useStyles } from "./ImdbRating.styles";
import { ImdbRatingProps } from "../../../types";

export const ImdbRating = ({ rating }: ImdbRatingProps) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.logoContainer}>
      <SvgIcon fontSize={"large"} className={classes.logo}>
        <image href={IMAGES.imdb} width="24" height="24" />
      </SvgIcon>

      <Typography variant="subtitle1" color="secondary.main">
        {rating.toFixed(1)}/10.0
      </Typography>
    </Box>
  );
};
