import { Box, SvgIcon, Typography } from "@mui/material";

import { IMAGES } from "../../../assets";
import { useStyles } from "./ImdbRating.styles";

type ImdbRatingProps = {
  rating: number;
};
export const ImdbRating = ({ rating }: ImdbRatingProps) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.logoContainer}>
      <SvgIcon fontSize={"large"}>
        <image href={IMAGES.imdb} width="24" height="24" />
      </SvgIcon>

      <Typography variant="subtitle1" color="primary.grey">
        {rating.toFixed(1)}/10.0
      </Typography>
    </Box>
  );
};
