import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import React from "react";
import { IMAGES } from "../../../assets";

type RottenRatingProps = {
  rating: number;
};

export const RottenRating = ({ rating = 0 }: RottenRatingProps) => {
  return (
    <
      // Stack direction={"row"}
    >
      <SvgIcon>
        {/* Embed the PNG image using the <image> element */}
        <image href={IMAGES.rotten} width="24" height="24" />
      </SvgIcon>
      <Typography variant="subtitle1" color="textSecondary">
        {(rating + 3).toFixed(1) * 10}%
      </Typography>
    </>
  );
};
